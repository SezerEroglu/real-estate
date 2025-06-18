'use client';

import { type ReactNode } from 'react';
import { useCart } from '@/hooks/UseCart/use-cart';

export interface CartRequiredProps {
  children: ReactNode;
}

export default function CartRequired({ children }: CartRequiredProps) {
  const { cartContext } = useCart();
  if (!cartContext.cart) {
    return null;
  }
  return children;
}
