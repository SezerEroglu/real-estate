"use client"

import { Button, extendVariants } from '@heroui/react';

const EstateButton = extendVariants(Button, {
  variants: {
    color: {
      estate: 'bg-primary-500 text-white hover:bg-primary-600',
    },
    size: {
      estate: 'px-8 py-2 text-sm md:w-auto rounded-md',
    },
  },
  defaultVariants: {
    color: 'estate',
    size: 'estate',
  },
});
EstateButton.displayName = 'EstateButton';

export default EstateButton;
