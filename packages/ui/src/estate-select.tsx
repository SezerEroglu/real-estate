'use client';

import { extendVariants, Select } from '@heroui/react';

const EstateSelect = extendVariants(Select, {
  variants: {
    base: {
      base: {
        trigger: 'border-1 border-divider/50 h-unit-14',
        value: 'text-secondary-foreground',
        label: 'text-secondary-foreground',
        popoverContent: 'bg-secondary text-secondary-foreground',
      },
    },
    isInvalid: {
      true: {
        trigger: '!bg-transparent',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
    radius: 'full',
    base: 'base',
  },
});

EstateSelect.displayName = 'EstateSelect';
export default EstateSelect;
