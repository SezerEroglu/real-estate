import { ReactNode } from 'react';
import { CartContextProvider } from '@/providers/CartContextProvider/cart-context-provider';
import { CartModel } from '@/types/CartModel/cart-model';

export interface ServerProvidersProps {
  children: ReactNode;
}

export default async function ServerProviders({
  children,
}: ServerProvidersProps) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
