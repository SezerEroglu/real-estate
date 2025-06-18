'use client';

import { useMemo, useState } from 'react';
import { Carousel, type CarouselProps } from './carousel';
import { cn } from '@heroui/react';

export default function DetailPageCarousel({
  children,
  ...carouselProps
}: CarouselProps) {
  const itemCount = useMemo(() => Array.from(children).length, [children]);
  const [itemStart, setItemStart] = useState(0);
  return (
    <>
      <Carousel
        {...carouselProps}
        itemsPerPage={1}
        itemStart={itemStart}
        onItemChange={setItemStart}
        className="grid-cols-1"
      >
        {children}
      </Carousel>
      <div className="mb-5 flex flex-row md:space-x-8">
        <div className="hidden whitespace-nowrap text-3xl font-bold text-foreground md:block">
          {itemStart + 1} / {itemCount}
        </div>
        <div className="flex w-full flex-row flex-wrap items-center justify-center gap-8 md:justify-start">
          {Array(itemCount)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                type="button"
                className={cn(
                  'w-10 rounded-full lg:w-20',
                  itemStart === index
                    ? 'h-1.5 bg-foreground'
                    : 'h-1 bg-foreground-100',
                )}
                onClick={() => setItemStart(index)}
              />
            ))}
        </div>
      </div>
    </>
  );
}
