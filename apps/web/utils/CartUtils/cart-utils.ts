import { CartModel } from '@/types/CartModel/cart-model';

export function getTotalQuantity(cart: CartModel): number {
  return cart.items.reduce((sum, item) => sum + item.properties.quantity, 0);
}
