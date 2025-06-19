'use client';

import React, { useMemo, useState } from 'react';
import { HeroCarouselProps, HeroCarousel } from './hero-carousel';

export interface HeroSliderProps extends HeroCarouselProps {
  title: string;
}

export function HeroSlider({
  title,
  children,
  ...carouselProps
}: HeroSliderProps) {
  const nonNullChildren = useMemo(
    () => React.Children.map(children, (child) => child),
    [children],
  );
  const itemCount = useMemo(
    () => React.Children.count(nonNullChildren),
    [nonNullChildren],
  );
  const [itemStart, setItemStart] = useState(0);
  if (itemCount < 1) return <></>;
  return (
    <>
      <div className="flex flex-col justify-between gap-4 pb-10 md:w-full lg:w-[90%] lg:flex-row lg:items-center">
        <h2 className="text-5xl font-bold text-foreground">
          {title || 'Deals List Block Hero Slider Title'}
        </h2>
        <div className="flex flex-row space-x-8">
          <div className="whitespace-nowrap text-3xl font-bold text-foreground">
            {itemStart + 1} / {itemCount}
          </div>
          <div className="flex flex-row flex-wrap items-center gap-x-8">
            {Array(itemCount)
              .fill(0)
              .map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className='py-3'
                  onClick={() => setItemStart(index)}
                >
                  <div
                    className={`w-10 rounded-full lg:w-20 ${
                      itemStart === index
                        ? 'h-1.5 bg-foreground'
                        : 'h-1 bg-foreground-100'
                    }`}
                  ></div>
                </button>
              ))}
          </div>
        </div>
      </div>
      <HeroCarousel
        {...carouselProps}
        itemStart={itemStart}
        onItemChange={setItemStart}
      >
        {nonNullChildren}
      </HeroCarousel>
    </>
  );
}
