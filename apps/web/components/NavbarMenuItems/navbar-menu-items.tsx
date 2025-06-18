'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Badge, cn, Divider, NavbarMenuItem } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import BagSvg from '@/components/svg/BagIcon/bag-svg';
import IconCart from '@/components/svg/CartIcon/icon-cart';
import CloseSvg from '@/components/svg/CloseIcon/close-svg';
import HeartSvg from '@/components/svg/HeartIcon/heart-svg';
import IconHome from '@/components/svg/HomeIcon/icon-home-svg';
import InfoIcon from '@/components/svg/InfoIcon/info-svg';
import IconUser from '@/components/svg/UserIcon/icon-user';
import { useCart } from '@/hooks/UseCart/use-cart';
import { getTotalQuantity } from '@/utils/CartUtils/cart-utils';

interface NavbarMenuItemsProps {
  closeMenu: () => void;
}

export function NavbarMenuItems({ closeMenu }: NavbarMenuItemsProps) {
  const { cartContext } = useCart();
  const itemQuantity = useMemo(() => {
    return cartContext.cart?.items ? getTotalQuantity(cartContext.cart) : 0;
  }, [cartContext]);
  return (
    <div className="flex h-full flex-col gap-6 bg-background">
      <div>
        <div className="p-4">
          <NavbarMenuItem
            className="flex cursor-pointer items-center gap-2"
            onClick={closeMenu}
          >
            <CloseSvg className="text-2xl text-secondary" />
            <p className="text-xs">Close Menu</p>
          </NavbarMenuItem>
        </div>
        <Divider />
        {/* {session.status === 'authenticated' ? (
          <>
            <h2 className="p-4 text-2xl font-bold text-secondary">
              Hey {session.data?.user.profile.firstName}!
            </h2>
            <Divider />
          </>
        ) : ( */}
        <div className="px-4 pt-8">
          <EstateButton
            as={Link}
            size="lg"
            variant="solid"
            href="/auth"
            className="w-full"
            endContent={<IconUser className="text-secondary-foreground" />}
            color="secondary"
            onClick={closeMenu}
          >
            Login
          </EstateButton>
        </div>
        {/* )} */}
      </div>

      <div className="mb-4 w-full border-b border-secondary border-opacity-10 text-foreground">
        <p className="px-4 py-2 text-xs">Navigation</p>
        <Divider />
        <div className="flex flex-col gap-4 p-4">
          <NavbarMenuItem className="flex items-center gap-2">
            <IconHome className="text-2xl text-secondary" />
            <Link href="/" className="text-lg" onClick={closeMenu}>
              Homepage
            </Link>
          </NavbarMenuItem>
          <Divider />
          <NavbarMenuItem className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <IconCart className="text-2xl text-secondary" />
              <a href="/cart" className="text-lg" onClick={closeMenu}>
                Cart
              </a>
            </div>
            <Badge
              content={itemQuantity}
              classNames={{
                badge: itemQuantity ? 'w-6 h-6 text-sm' : 'hidden',
              }}
              color="secondary"
              suppressHydrationWarning={true}
            >
              <div></div>
            </Badge>
          </NavbarMenuItem>
          <Divider />
          <NavbarMenuItem className="flex items-center gap-2">
            <InfoIcon className="text-secondary" />
            <Link href="/content/faq" className="text-lg" onClick={closeMenu}>
              FAQ
            </Link>
          </NavbarMenuItem>
        </div>
      </div>
      <div className="mb-4 w-full border-b border-secondary/10">
        <p className="px-4 py-2 text-xs text-foreground">My Profile</p>
        <Divider />
        <div className="flex flex-col gap-4 p-4">
          <NavbarMenuItem className={cn('flex items-center gap-2')}>
            <IconUser className="text-2xl text-secondary" />
            <Link href="/profile" className="text-lg" onClick={closeMenu}>
              Profile
            </Link>
          </NavbarMenuItem>
          <Divider />
          <NavbarMenuItem className={cn('flex items-center gap-2')}>
            <BagSvg className="text-2xl text-secondary" />
            <Link href="/profile/deals" className="text-lg" onClick={closeMenu}>
              Your Items
            </Link>
          </NavbarMenuItem>
          <Divider />
          <NavbarMenuItem className={cn('flex items-center gap-2')}>
            <HeartSvg className="text-2xl text-secondary" />
            <Link
              href="/profile/favorites"
              className="text-lg"
              onClick={closeMenu}
            >
              Favourites
            </Link>
          </NavbarMenuItem>
        </div>
      </div>

      <div>
        {/* {session.status === 'authenticated' && (
          <NavbarMenuItem
            className="flex w-full items-center justify-center gap-2"
            onClick={closeMenu}
          >
            <EstateButton
              as={Link}
              size="lg"
              variant="ghost"
              href="/auth"
              className="w-[90%]"
              onClick={onClickSignOut}
              color="secondary"
            >
              Abmelden
            </EstateButton>
          </NavbarMenuItem>
        )} */}
      </div>
    </div>
  );
}
