'use client';

import { Button, extendVariants } from '@heroui/react';

const EstateButton = extendVariants(Button, {
  variants: {
    variant: {
      ghost: 'text-foreground',
    },
    color: {
      foreground: 'text-foreground',
    },
    hover: {
      enabled:
        'transition-transform duration-300 ease-in-out hover:-translate-y-1',
    },
  },
  defaultVariants: {
    hover: 'enabled',
  },
});

EstateButton.displayName = 'EstateButton';

export default EstateButton;
