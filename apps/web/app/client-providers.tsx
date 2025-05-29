'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { HeroUIProvider } from '@heroui/react';

export interface ProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ProvidersProps) {
  const router = useRouter();

  return <HeroUIProvider navigate={router.push}>{children}</HeroUIProvider>;
}
