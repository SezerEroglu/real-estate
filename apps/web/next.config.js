/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  images: {
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 31536000,
    path: '/_next/image',
    loader: 'default',
  },
  sassOptions: {
    includePaths: ['node_modules', 'styles'],
  },
  env: {},
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
