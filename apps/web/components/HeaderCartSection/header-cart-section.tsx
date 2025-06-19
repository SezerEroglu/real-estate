'use client';

import { useMemo, type ReactNode } from 'react';
import { Badge } from '@heroui/react';
import { useCart } from '@/hooks/UseCart/use-cart';
import { getTotalQuantity } from '@/utils/CartUtils/cart-utils';

export interface HeaderCartSectionProps {
  children: ReactNode;
}

export default function HeaderCartSection({
  children,
}: HeaderCartSectionProps) {
  const { cartContext } = useCart();
  const itemQuantity = useMemo(() => {
    return cartContext.cart?.items ? getTotalQuantity(cartContext.cart) : 0;
  }, [cartContext]);
  return (
    <Badge
      content={itemQuantity}
      classNames={{
        badge: itemQuantity ? 'w-6 h-6 text-sm' : 'hidden',
      }}
      color="primary"
      placement="bottom-left"
      suppressHydrationWarning={true}
    >
      {children}
    </Badge>
  );
}
