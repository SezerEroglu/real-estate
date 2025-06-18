'use client';

import EstateButton from '@repo/ui/estate-button';
import IconCart from '@/components/svg/CartIcon/icon-cart';

export default function HeaderCartButton() {
  const ctaText = 'zum warenkorb';
  const targetUrl = '/cart';
  return (
    <EstateButton
      as="a"
      size="lg"
      variant="flat"
      isIconOnly={true}
      href={targetUrl}
      color="secondary"
      className="h-12 w-12"
    >
      <IconCart className="text-2xl" />
    </EstateButton>
  );
}
