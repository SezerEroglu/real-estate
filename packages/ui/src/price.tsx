import React, { useMemo } from 'react';
import { tv } from '@heroui/react';

// import { tv } from '@nextui-org/react';

export interface PriceProps {
  oldPrice?: number;
  actualPrice: number;
  showDigits?: boolean;
  showOldPrice?: boolean;
  superscriptText?: string;
  customSavingsText?: string;
  customPricePrefix?: string;
  customOldPricePrefix?: string;
  color?: 'default' | 'light-color';
  textSize?: 'default' | 1 | 2 | 3 | 4 | 5;
  badge?: 1 | 2 | 3;
  variant?: 'light' | 'dark';
}

export function formatCurrency(price: number, showDigits: boolean = true) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: showDigits ? 2 : 0,
    maximumFractionDigits: showDigits ? 2 : 0,
  }).format(price);
}

export function Price({
  oldPrice,
  actualPrice,
  showDigits = true,
  showOldPrice = true,
  customSavingsText,
  customPricePrefix,
  customOldPricePrefix,
  textSize = 'default',
  color = 'default',
  badge = 1,
  variant = 'dark',
  superscriptText,
}: PriceProps) {
  const priceText = tv({
    base: 'font-bold flex items-center flex-wrap',
    variants: {
      textSize: {
        default: 'text-4xl',
        1: 'text-2xl',
        2: 'text-4xl',
        3: 'text-[80px] mr-6',
        4: 'text-[88px] mr-2',
        5: 'text-[32px] md:text-5xl ',
      },
      color: {
        default: 'text-foreground',
        'light-color': 'text-primary-foreground',
      },
    },
    defaultVariants: {
      textSize: 'default',
      color: 'default',
    },
  });

  const superscriptTextClass = tv({
    variants: {
      textSize: {
        default: 'text-base',
        1: 'text-sm',
        2: 'text-xl',
        3: 'text-[40px]',
        4: 'text-[44px]',
        5: 'text-[16px] md:text-2xl ',
      },
    },
    defaultVariants: {
      textSize: 'default',
    },
  });

  const uvpText = tv({
    base: 'font-light line-through mr-2',
    variants: {
      textSize: {
        default: 'text-lg',
        1: 'text-sm',
        2: 'text-xl md:text-2xl',
        3: 'text-3xl mr-5',
        4: 'text-3xl mr-2',
        5: 'text-xs md:text-base',
      },
      variant: {
        default: 'text-foreground',
        dark: '',
        light: '',
      },
    },
    defaultVariants: {
      textSize: 'default',
    },
  });

  const savingsText = tv({
    base: 'font-light ml-2 p-1 rounded whitespace-nowrap',
    variants: {
      textSize: {
        default: 'text-sm',
        1: 'text-sm',
        2: 'text-sm',
        3: 'text-xl font-normal ml-6',
        4: 'text-xl font-normal ml-6',
        5: 'text-base',
      },
      badge: {
        default: 1,
        1: '',
        2: 'bg-primary text-primary-foreground rounded p-2',
        3: 'bg-secondary text-secondary-foreground rounded p-2',
      },
    },
  });

  const savingsPercentage = useMemo(
    () =>
      oldPrice !== undefined
        ? Math.floor(((oldPrice - actualPrice) / oldPrice) * 100)
        : undefined,
    [oldPrice, actualPrice],
  );

  const oldPriceValid =
    oldPrice != actualPrice && !!Number(oldPrice) && oldPrice !== undefined;
  const savingsPercentageValid =
    oldPriceValid && oldPrice > actualPrice && !!savingsPercentage;
  return (
    <div className="content-center">
      <span className={priceText({ textSize, color })}>
        {/* {oldPriceValid && showOldPrice && (
          <small className={uvpText({ textSize, variant })}>
            {customOldPricePrefix} {formatCurrency(oldPrice, showDigits)}
          </small>
        )} */}
        {!!customPricePrefix ? customPricePrefix + ' ' : ''}
        {formatCurrency(actualPrice, showDigits)}
        <sup className={superscriptTextClass({ textSize })}>
          {superscriptText}
        </sup>
        {/* {savingsPercentageValid && !customSavingsText && (
          <small className={`${savingsText({ textSize, badge })}`}>
            Du sparst {savingsPercentage}%
          </small>
        )} */}
        {/* {customSavingsText && (
          <small className={`${savingsText({ textSize, badge })}`}>
            {customSavingsText}
          </small>
        )} */}
      </span>
    </div>
  );
}
