'use client';

import { extendVariants, Checkbox } from '@heroui/react';

export const EstateCheckbox = extendVariants(Checkbox, {
  // variants: {
  //   color: {
  //     white: {
  //       wrapper: 'before:!border-white/50',
  //       label: 'text-white',
  //     },
  //     base: {
  //       wrapper: 'before:!border-secondary/50',
  //       label: 'text-secondary',
  //     },
  //   },
  //   size: {
  //     lg: {
  //       wrapper: 'w-10 h-10 before:border-1 before:border-secondary/50',
  //     },
  //   },
  //   base: {
  //     base: {
  //       base: 'rounded-full',
  //       wrapper: 'mr-4 after:!bg-white after:border-secondary after:border',
  //       icon: 'text-secondary',
  //     },
  //   },
  //   isInvalid: {
  //     true: {
  //       wrapper: 'before:border-danger',
  //       label: 'text-danger',
  //     },
  //   },
  // },
  // defaultVariants: {
  //   base: 'base',
  //   size: 'lg',
  //   color: 'secondary',
  // },
});
EstateCheckbox.displayName = 'AldiCheckbox';
