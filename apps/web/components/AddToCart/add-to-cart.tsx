'use client';

import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import EstateButton from '@repo/ui/estate-button';
import { toast } from '@repo/ui/toast';
import IconCart from '@/components/svg/CartIcon/icon-cart';
import { useCart } from '@/hooks/UseCart/use-cart';
import { ItemModel } from '@/types/ItemModel/item-model';

export interface AddDealToCartProps {
  item: ItemModel;
}
export default function AddDealToCart({ item }: AddDealToCartProps) {
  const {
    id,
    properties: { maxCustomerQuantity },
  } = item;
  const { cartContext, updateCartItem } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  // const unlimitedQuantity = maxCustomerQuantity >= 999;
  const [quantity, setQuantity] = useState(1);
  const increment = useCallback(
    () => setQuantity((oldQuantity) => oldQuantity + 1),
    [],
  );
  const decrement = useCallback(
    () => setQuantity((oldQuantity) => Math.max(1, oldQuantity - 1)),
    [],
  );

  const existingCartItemQuantity = useMemo(
    () =>
      (cartContext.cart?.items || []).find((cartItem) => cartItem.id === id)
        ?.properties.quantity || 0,
    [cartContext.cart?.items, id],
  );

  const onAddToCart = useCallback(async () => {
    try {
      await updateCartItem(item, existingCartItemQuantity + quantity);
      setIsLoading(true);
      router.push('/cart');
    } catch {
      toast({
        title: 'Error',
        description: 'An error occurred while adding to the shopping cart',
      });
    } finally {
      setIsLoading(false);
      setQuantity(1);
    }
  }, [item, existingCartItemQuantity, quantity, updateCartItem, router]);

  return (
    <>
      <div className="lg:hidden">
        <div className="flex flex-row items-center justify-center gap-2 md:gap-5">
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            className="text-base md:text-2xl"
            size="sm"
            onClick={decrement}
            isDisabled={quantity <= 1}
          >
            -
          </EstateButton>
          <div className="min-w-8 text-center text-base font-bold text-primary md:text-2xl">
            {quantity}
          </div>
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            className="text-base md:text-2xl"
            size="sm"
            onClick={increment}
            isDisabled={
              existingCartItemQuantity + quantity >= maxCustomerQuantity
            }
          >
            +
          </EstateButton>
          <EstateButton
            size="sm"
            className="h-10 max-w-48 grow py-6 text-base md:max-w-60 md:text-xl"
            variant="solid"
            color="primary"
            endContent={<IconCart className="shrink-0 text-2xl" />}
            onClick={onAddToCart}
            isLoading={isLoading}
            isDisabled={
              existingCartItemQuantity + quantity > maxCustomerQuantity
            }
          >
            Add to Cart
          </EstateButton>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-center gap-4">
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            size="lg"
            onClick={decrement}
            isDisabled={quantity <= 1}
          >
            -
          </EstateButton>
          <div className="min-w-8 text-center text-3xl font-bold text-primary">
            {quantity}
          </div>
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            size="lg"
            onClick={increment}
            isDisabled={
              existingCartItemQuantity + quantity >= maxCustomerQuantity
            }
          >
            +
          </EstateButton>
          <EstateButton
            size="lg"
            className="max-w-64 grow"
            variant="solid"
            color="primary"
            endContent={<IconCart className="shrink-0 text-2xl" />}
            onClick={onAddToCart}
            isLoading={isLoading}
            isDisabled={
              existingCartItemQuantity + quantity > maxCustomerQuantity
            }
          >
            Add to Cart
          </EstateButton>
        </div>
      </div>
    </>
  );
}
