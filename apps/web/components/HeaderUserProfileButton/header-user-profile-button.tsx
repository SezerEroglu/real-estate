'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import { BagOutlineSvg } from '@/components/svg/BagOutlineIcon/bag-outline-svg';
import { BookmarkOutlineSvg } from '@/components/svg/BookmarkOutlineIcon/bookmark-outline-svg';
import IconUser from '@/components/svg/UserIcon/icon-user';

export interface HeaderUserProfileButtonProps {
  children: ReactNode;
}

export default function HeaderUserProfileButton({
  children,
}: HeaderUserProfileButtonProps) {
  return (
    <Dropdown
      triggerScaleOnOpen={false}
      placement="bottom-end"
      classNames={{
        content: 'bg-secondary text-white rounded-md p-0',
      }}
    >
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu
        itemClasses={{
          base: 'p-4 rounded-none data-[hover=true]:bg-default/20 data-[hover=true]:text-white',
          wrapper: 'p-0',
          title: 'text-lg',
        }}
        classNames={{
          base: 'p-0',
          list: 'divide-y divide-default/20 gap-0',
        }}
      >
        <DropdownItem
          key="/profile/general"
          as={Link}
          href="/profile/general"
          startContent={<IconUser className="text-xl" />}
        >
          My Profile
        </DropdownItem>
        <DropdownItem
          key="/profile/deals"
          as={Link}
          href="/profile/deals"
          startContent={<BagOutlineSvg className="text-xl" />}
        >
          Your Items
        </DropdownItem>
        <DropdownItem
          key="/profile/favorites"
          as={Link}
          href="/profile/favorites"
          startContent={<BookmarkOutlineSvg className="text-xl" />}
        >
          Favourites
        </DropdownItem>
        {/*<DropdownItem key="logout" onClick={onClickSignOut}>
          Ausloggen
        </DropdownItem>*/}
      </DropdownMenu>
    </Dropdown>
  );
}
