FROM node:23-alpine AS base

FROM base AS builder
# Installs turbo and recommened libc6-compat
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo@2.5.3
# Since we will use another stage, we need to copy all the project files
# to be copied from in the builder stage
COPY . .


FROM base AS installer
# Installs dependencies and builds the project

# Since we are in a different stage, we need to install recommended libc6-compat again
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app


COPY .gitignore .gitignore

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/yarn.lock ./yarn.lock
# Package.json files for each package
COPY --from=builder /app/packages/eslint-config/package.json ./packages/eslint-config/package.json
COPY --from=builder /app/packages/prettier-config/package.json ./packages/prettier-config/package.json
COPY --from=builder /app/packages/tailwind-config/package.json ./packages/tailwind-config/package.json
COPY --from=builder /app/packages/typescript-config/package.json ./packages/typescript-config/package.json
COPY --from=builder /app/packages/ui/package.json ./packages/ui/package.json

# Package.json files for each app
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json

COPY --from=builder /app/.yarnrc.yml ./.yarnrc.yml
COPY --from=builder /app/.yarn ./.yarn

# Finally install dependencies
RUN yarn install --immutable

COPY --from=builder /app/ .
# Build the project
# We use the --filter flag to only build the web app, ... for its dependencies
RUN yarn build --filter=web...

FROM base AS runner
# Run the project from artifacts created in the installer stage
WORKDIR /app

COPY --from=installer /app/apps/web/next.config.js .
COPY --from=installer /app/apps/web/package.json .


# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

# Rename server.js to server.mjs to avoid issues with ESM
# Next.js uses ESM by default, and we need to ensure the server file is recognized as a module
RUN mv apps/web/server.js apps/web/server.mjs

CMD ["node", "apps/web/server.mjs"]