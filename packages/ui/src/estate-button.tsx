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
  },
});
EstateButton.displayName = 'EstateButton';

export default EstateButton;
