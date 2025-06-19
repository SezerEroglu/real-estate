'use client';

import EstateButton from '@repo/ui/estate-button';
import { formatCurrency } from '@repo/ui/price';
import { useCart } from '@/hooks/UseCart/use-cart';

export default function CartCostOverview() {
  const { cartContext } = useCart();
  if (!cartContext || !cartContext.cart) return null;

  const items = cartContext.cart?.items ?? [];

  const total = items.reduce(
    (sum, item) =>
      sum + item.properties.pricing.actualPrice * item.properties.quantity,
    0,
  );
  const totalRegular = items.reduce(
    (sum, item) =>
      sum + item.properties.pricing.regularPrice * item.properties.quantity,
    0,
  );
  // const saving = totalRegular - total;

  return (
    <div className="bg-secondary2 text-secondary2-foreground rounded-[20px] p-10">
      <h1 className="mb-6 border-b border-divider pb-6 text-3xl font-bold">
        Investment Overview
      </h1>
      <div className="mb-6 flex flex-col gap-4 border-b border-divider pb-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-baseline gap-1">
            <h3 className="text-lg font-medium">Subtotal</h3>
            <small className="opacity-50">Taxes included.</small>
          </div>
          <p className="font-medium">
            {formatCurrency(totalRegular / 100, true)}
          </p>
        </div>
        {/* {saving > 0 && (
          <div className="flex flex-row justify-between">
            <h3 className="text-lg font-medium">Du sparst</h3>
            <p className="font-medium">
              - {formatCurrency(saving / 100, true)}
            </p>
          </div>
        )} */}
      </div>
      <div className="mb-6 flex flex-row justify-between border-b border-divider pb-6">
        <div className="flex flex-row items-baseline gap-1">
          <h3 className="text-xl font-bold">Total</h3>
          <small className="opacity-50">Taxes inlcuded.</small>
        </div>
        <p className="text-3xl font-bold">
          {formatCurrency(total / 100, true)}
        </p>
      </div>
      <EstateButton
        variant="solid"
        color="primary"
        fullWidth={true}
        size="lg"
        as="a"
        //   href={'/cart/checkout'}
      >
        To Checkout
      </EstateButton>
    </div>
  );
}
