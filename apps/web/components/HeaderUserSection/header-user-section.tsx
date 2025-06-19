'use client';

import React from 'react';
import Link from 'next/link';
import { Badge } from '@heroui/react';
import EstateButton from '@repo/ui/estate-button';
import HeaderUserProfileButton from '@/components/HeaderUserProfileButton/header-user-profile-button';
import { IconArrowDown } from '@/components/svg/IconArrowDown/icon-arrow-down';
import { IconProfile } from '@/components/svg/IconProfile/icon-profile';
import IconUser from '@/components/svg/UserIcon/icon-user';

export default function HeaderUserSection() {
  const session = { status: 'unauthenticated' };
  if (session.status === 'authenticated') {
    return (
      <>
        <Badge
          placement="bottom-right"
          color="secondary"
          classNames={{
            badge: 'w-6 h-6 text-lg',
          }}
          content={<IconArrowDown className="shrink-0" />}
        >
          <HeaderUserProfileButton>
            <EstateButton
              size="lg"
              variant="flat"
              className="h-12 w-12 cursor-pointer items-center p-0 lg:h-full lg:w-full lg:p-1"
              data-is-user-button={true}
            >
              <span className="hidden pl-4 lg:block">Hey!</span>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <IconProfile className="text-2xl text-secondary" />
              </div>
            </EstateButton>
          </HeaderUserProfileButton>
        </Badge>
      </>
    );
  }
  return (
    <>
      <div>
        <div className="hidden lg:block">
          <EstateButton
            as={Link}
            size="lg"
            variant="solid"
            href="/auth"
            endContent={<IconUser className="text-2xl" />}
            color="secondary"
          >
            Login
          </EstateButton>
        </div>
        <div className="hidden md:block lg:hidden">
          <EstateButton
            as={Link}
            data-is-user-button={true}
            variant="flat"
            color="secondary"
            isIconOnly={true}
            endContent={<IconUser className="text-2xl" />}
            href="/auth"
            className="h-12 w-12 text-secondary"
          />
        </div>
      </div>
    </>
  );
}
