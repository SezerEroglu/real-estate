'use client';

import { useEffect, useRef, useState } from 'react';
import { default as Link, default as NextLink } from 'next/link';
import {
  cn,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import type { Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import HeaderCartButton from '@/components/HeaderCartButton/header-cart-button';
import HeaderCartSection from '@/components/HeaderCartSection/header-cart-section';
import HeaderUserSection from '@/components/HeaderUserSection/header-user-section';
import { NavbarMenuItems } from '@/components/NavbarMenuItems/navbar-menu-items';
import AmplicadeLogo from '@/components/svg/AmplicadeLogo/amplicade-logo';
import { IconDay } from '@/components/svg/IconDay/icon-day';
import { IconNight } from '@/components/svg/IconNight/icon-night';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { theme, setTheme } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;
    setMounted(true);
  }, [mounted, setMounted]);

  return (
    <Navbar
      suppressHydrationWarning={true}
      isBordered={true}
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      classNames={{
        base: 'navbar-height-proxy bg-background !border-solid py-4 max-h-[152px] ',
        menu: 'navbar-height-proxy',
        wrapper: cn('px-4 !container mx-auto'),
        toggleIcon: 'bg-background/10 rounded-full h-auto aspect-square p-6',
        toggle: 'block w-12',
      }}
    >
      <NavbarContent className="hidden shrink-0 gap-0 lg:flex" justify="center">
        <NavbarBrand as={NextLink} href="/" className="mr-4 h-full shrink-0">
          <AmplicadeLogo className="h-32 w-32 text-primary" />
        </NavbarBrand>
        <NavbarItem>
          <EstateButton
            color="foreground"
            as={Link}
            size="lg"
            variant="light"
            href="/"
          >
            Home
          </EstateButton>
        </NavbarItem>
        <NavbarItem>
          <EstateButton
            as={Link}
            color="foreground"
            size="lg"
            variant="light"
            href="/content/faq"
          >
            FAQ
          </EstateButton>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="hidden shrink-0 gap-4 lg:flex" justify="end">
        <EstateButton
          //   as={Link}
          size="lg"
          color="secondary"
          variant={'solid'}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          suppressHydrationWarning={true}
          isIconOnly={true}
          startContent={
            !mounted ? '' : theme === 'light' ? <IconNight /> : <IconDay />
          }
          isLoading={!mounted}
        />
        <HeaderUserSection />
        <HeaderCartSection>
          <HeaderCartButton />
        </HeaderCartSection>
      </NavbarContent>

      <NavbarContent
        className="flex w-full flex-col gap-2 lg:hidden"
        justify="center"
      >
        <div className="flex w-full items-center gap-2 sm:gap-4">
          <NavbarMenuToggle onClick={toggleMenu} />
          <NavbarBrand as={NextLink} href="/" className="shrink-0 space-x-4">
            <AmplicadeLogo className="h-32 w-32 py-4 text-primary" />
          </NavbarBrand>
          <EstateButton
            //   as={Link}
            size="lg"
            color="secondary"
            variant={'solid'}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            suppressHydrationWarning={true}
            isIconOnly
            startContent={
              !mounted ? '' : theme === 'light' ? <IconNight /> : <IconDay />
            }
            isLoading={!mounted}
          />
          <HeaderCartSection>
            <HeaderCartButton />
          </HeaderCartSection>
          <HeaderUserSection />
        </div>
      </NavbarContent>

      <NavbarMenu
        motionProps={{
          variants: {
            enter: {
              width: '100%',
              zIndex: '100',
              transition: {
                duration: 0.3,
                easings: 'easeOut',
              },
            },
            exit: {
              width: 0,
              transition: {
                duration: 0.25,
                easings: 'easeIn',
              },
            },
          } as Variants,
        }}
        className="top-0 bg-foreground/50 p-0 backdrop-blur-none"
      >
        <div
          ref={menuRef}
          className="flex h-full w-[280px] flex-col gap-4 overflow-hidden rounded-r-xl bg-background"
        >
          <NavbarMenuItems closeMenu={closeMenu} />
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
