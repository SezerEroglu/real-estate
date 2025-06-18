'use client';

import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { ChevronRightSvg } from './svg/chevron-right';

export interface HeroCarouselProps {
  children: React.ReactNode;
  itemStart?: number;
  onItemChange?: (index: number) => void;
}

export function HeroCarousel({
  children,
  itemStart = 0,
  onItemChange,
}: HeroCarouselProps) {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const itemCount = items.length;
  const [_itemStart, setItemStart] = useState(itemStart);

  const onGoPrevious = useCallback(() => {
    setItemStart((prev) => Math.max(0, prev - 1));
  }, []);

  const onGoNext = useCallback(() => {
    setItemStart((prev) => Math.min(itemCount - 1, prev + 1));
  }, [itemCount]);

  useEffect(() => {
    onItemChange?.(_itemStart);
  }, [_itemStart, onItemChange]);

  useEffect(() => {
    setItemStart(itemStart ?? 0);
  }, [itemStart]);

  const paddingOffset = itemStart * 32;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-300"
          style={{
            transform: `translateX(-${
              _itemStart * 100
            }%) translateX(-${paddingOffset}px)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {_itemStart > 0 && (
        <button
          className="absolute left-0 top-1/2 z-50 -translate-x-1 -translate-y-1/2 cursor-pointer rounded-full border-2 border-divider bg-secondary p-2 text-secondary-foreground transition-opacity hover:opacity-70"
          onClick={onGoPrevious}
        >
          <ChevronRightSvg className="rotate-180 text-3xl" />
        </button>
      )}
      {_itemStart < itemCount - 1 && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 cursor-pointer rounded-full border-2 border-divider bg-secondary p-2 text-secondary-foreground transition-opacity hover:opacity-70"
          onClick={onGoNext}
        >
          <ChevronRightSvg className="text-3xl" />
        </button>
      )}
    </div>
  );
}
