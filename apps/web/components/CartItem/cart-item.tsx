'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { cn, Spinner, SelectItem } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import EstateSelect from '@repo/ui/estate-select';
import { formatCurrency } from '@repo/ui/price';
import { toast } from '@repo/ui/toast';
import { useCart } from '@/hooks/UseCart/use-cart';
import { CartItemModel } from '@/types/CartModel/cart-model';

export interface CartItemProps {
  cartItem: CartItemModel;
}

export default function CartItem({ cartItem }: CartItemProps) {
  const {
    id,
    properties: { display, partner, pricing, quantity, maxOrderQuantity },
  } = cartItem;
  const { removeCartItem, updateCartItem } = useCart();

  const [isRemovingDeal, setIsRemovingDeal] = useState(false);
  const [isChangingQuantity, setChangingQuantity] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);

  const handleQuantityChange = useCallback(
    async (event: React.ChangeEvent<HTMLSelectElement>) => {
      setChangingQuantity(true);
      const newQuantity = parseInt(event.target.value, 10);
      if (!!newQuantity) {
        try {
          await updateCartItem(cartItem, newQuantity);
        } catch (e) {
          toast({
            title: 'Fehler!',
            description: 'Der Warenkorb konnte nicht aktualisiert werden.',
          });
        }
        setSelectedQuantity(newQuantity);
      }
      setChangingQuantity(false);
    },
    [cartItem.id, updateCartItem],
  );

  const increment = useCallback(async () => {
    setChangingQuantity(true);
    try {
      await updateCartItem(cartItem, quantity + 1);
    } catch (e) {
      toast({
        title: 'Fehler!',
        description: 'Der Warenkorb konnte nicht aktualisiert werden.',
      });
    }
    setChangingQuantity(false);
  }, [cartItem.id, quantity, updateCartItem]);

  const decrement = useCallback(async () => {
    setChangingQuantity(true);
    const newQuantity = Math.max(1, quantity - 1);
    try {
      await updateCartItem(cartItem, newQuantity);
    } catch (e) {
      toast({
        title: 'Fehler!',
        description: 'Der Warenkorb konnte nicht aktualisiert werden.',
      });
    }
    setChangingQuantity(false);
  }, [cartItem.id, quantity, updateCartItem]);

  const options = Array.from(
    { length: Math.min(maxOrderQuantity, 30) },
    (_, i) => ({
      label: (i + 1).toString(),
      value: (i + 1).toString(),
    }),
  );

  const onClickRemoveDeal = useCallback(async () => {
    setIsRemovingDeal(true);
    await removeCartItem(cartItem.id);
    setIsRemovingDeal(false);
  }, [cartItem.id, removeCartItem]);

  return (
    <div
      className="flex flex-row items-center gap-4 py-6"
      id={'cart-item' + id}
      data-supplier-name={partner.name || ''}
      data-deal-name={display.name || ''}
    >
      {!partner.image ? (
        <div className="flex h-24 w-24 animate-pulse items-center justify-center overflow-hidden rounded-[20px]">
          <div className="h-[88px] w-[88px]" />
        </div>
      ) : (
        <div
          className={cn(
            'hidden h-24 w-24 overflow-hidden rounded-[20px] md:flex md:items-center md:justify-center',
          )}
        >
          <Image
            src={partner.image}
            alt={partner?.name ?? 'supplier'}
            width={88}
            height={88}
            quality={80}
            className="shrink-0 object-contain"
          />
        </div>
      )}
      <div className={cn('flex grow flex-col justify-center gap-2')}>
        <h2 className="flex-grow text-lg font-medium">{display.name}</h2>
        <p className="text-sm">Total: {quantity}</p>
        <button
          onClick={onClickRemoveDeal}
          className={cn(
            'inline-flex w-fit items-center gap-2',
            isRemovingDeal && 'opacity-50',
          )}
          color="secondary"
          disabled={isChangingQuantity || isRemovingDeal}
        >
          {isRemovingDeal && <Spinner color="secondary" size="sm" />}
          <span className="underline">{'Entfernen'}</span>
        </button>
      </div>
      <div className="hidden md:flex md:flex-row md:gap-4">
        <div className="flex flex-col items-end">
          {!!pricing.regularPrice &&
            pricing.regularPrice > pricing.actualPrice && (
              <div className="line-through opacity-75">
                {formatCurrency(pricing.regularPrice, true)}
              </div>
            )}
          {pricing.actualPrice && (
            <div className="text-3xl font-bold">
              {formatCurrency(pricing.actualPrice, true)}
            </div>
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            size="md"
            onClick={decrement}
            isDisabled={isRemovingDeal || quantity <= 1}
          >
            -
          </EstateButton>
          <div className="min-w-8 text-center text-3xl font-bold text-content2-foreground">
            {quantity}
          </div>
          <EstateButton
            variant="ghost"
            color="primary"
            isIconOnly={true}
            size="md"
            onClick={increment}
            isDisabled={isRemovingDeal || quantity + 1 > maxOrderQuantity}
          >
            +
          </EstateButton>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:hidden">
        <div className="flex flex-row items-center gap-2">
          <EstateSelect
            selectedKeys={[selectedQuantity.toString()]}
            onChange={handleQuantityChange}
            disabled={isRemovingDeal || isChangingQuantity}
            disallowEmptySelection={true}
          >
            {options.map((option) => (
              <SelectItem key={option.value}>{option.label}</SelectItem>
            ))}
          </EstateSelect>
        </div>
        <div className="flex flex-col items-end">
          {!!pricing.regularPrice &&
            pricing.regularPrice > pricing.actualPrice && (
              <div className="line-through opacity-75">
                {formatCurrency(pricing.regularPrice, true)}
              </div>
            )}
          {!!pricing.actualPrice && (
            <div className="text-3xl font-bold">
              {formatCurrency(pricing.actualPrice, true)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
