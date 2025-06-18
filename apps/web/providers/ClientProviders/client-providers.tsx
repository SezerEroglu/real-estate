'use client';

import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import UIProvider from '@repo/ui/ui-provider';

export interface ProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ProvidersProps) {
  const router = useRouter();

  return <UIProvider router={router}>{children}</UIProvider>;
}
