'use client';

import CartItem from '@/components/CartItem/cart-item';
import { useCart } from '@/hooks/UseCart/use-cart';

export default function CartItemList() {
  const {
    cartContext: { cart },
  } = useCart();

  return (cart?.items || []).map((cartItem) => (
    <div key={cartItem.id} className="md:border-t md:border-t-divider">
      <CartItem cartItem={cartItem} />
    </div>
  ));
}
