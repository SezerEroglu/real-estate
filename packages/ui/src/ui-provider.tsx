'use client';

import type { ReactNode } from 'react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export interface ProvidersProps {
  children: ReactNode;
  router?: AppRouterInstance;
}

export default function UIProvider({ router, children }: ProvidersProps) {
  return (
    <HeroUIProvider navigate={router && router.push}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system" // 👈 Detects system preference
        enableSystem={true}
      >
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
