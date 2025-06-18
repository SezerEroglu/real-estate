'use client';

import type { ReactNode } from 'react';
import React, {
  TouchEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usePathname } from 'next/navigation';
import { ChevronRightSvg } from './svg/chevron-right';
import { cn } from '@heroui/react';

// Adjust the path as necessary

export interface CarouselProps {
  children: Iterable<ReactNode>;
  itemStart?: number;
  itemsPerPage?: number;
  onItemChange?: (index: number) => void;
  className?: string;
  title?: string;
  swipingEnabled?: boolean;
}

export function Carousel({
  children,
  itemStart = 0,
  itemsPerPage = 1,
  onItemChange,
  className,
  title,
  swipingEnabled = true,
}: CarouselProps) {
  const items = useMemo(
    () => React.Children.toArray(children).map((child) => child),
    [children],
  );
  const itemCount = items.length;

  const [_itemStart, setItemStart] = useState(itemStart);
  const [lastMouseLocation, setLastMouseLocation] = useState<number>(-1);
  const pathname = usePathname();

  const onGoPrevious = useCallback(() => {
    setItemStart((prev) => Math.max(0, prev - itemsPerPage));
  }, [itemsPerPage]);

  const onGoNext = useCallback(() => {
    setItemStart((prev) =>
      Math.min(itemCount - itemsPerPage, prev + itemsPerPage),
    );
  }, [itemCount, itemsPerPage]);

  const handleOnTouchStart = useCallback((e: TouchEvent) => {
    try {
      setLastMouseLocation(e.touches[0]!.clientX);
    } catch {
      setLastMouseLocation(-1);
    }
  }, []);

  const handleOnTouchEnd = useCallback(
    (e: TouchEvent) => {
      try {
        const touchEndXLocation = e.changedTouches[0]!.clientX;
        const swipeDistance = touchEndXLocation - lastMouseLocation;

        if (swipeDistance > 50) {
          // Swipe right
          onGoPrevious();
        } else if (swipeDistance < -50) {
          // Swipe left
          onGoNext();
        }
      } catch {
        setLastMouseLocation(-1);
      }
    },
    [onGoNext, onGoPrevious, lastMouseLocation],
  );

  useEffect(() => {
    onItemChange?.(_itemStart);
  }, [_itemStart, onItemChange]);

  useEffect(() => {
    setItemStart(itemStart ?? 1);
  }, [itemStart]);

  // Check if the URL contains "/deal"
  const isDealPage = useMemo(() => pathname.includes('/deal'), [pathname]);
  if (itemCount < 1) return <></>;
  return (
    <>
      {title && (
        <h2 className="pb-5 text-xl font-bold text-foreground md:text-3xl lg:text-5xl">
          {title}
        </h2>
      )}
      <div
        className="relative"
        onTouchStart={swipingEnabled ? handleOnTouchStart : undefined}
        onTouchEnd={swipingEnabled ? handleOnTouchEnd : undefined}
      >
        <div className={cn('grid gap-4', className)}>
          {items.map((item, index) => {
            if (index < _itemStart || index >= _itemStart + itemsPerPage) {
              return (
                <div className="sr-only" key={index}>
                  {item}
                </div>
              );
            }
            return <div key={index}>{item}</div>;
          })}
        </div>
        {_itemStart >= 1 && (
          <button
            className={cn(
              'pointer-events-auto absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border-2 border-divider bg-secondary p-2 text-foreground transition-opacity hover:opacity-70',
              'left-4 -translate-x-1/2 md:left-0',
              isDealPage && 'hidden sm:block',
            )}
            onClick={onGoPrevious}
          >
            <ChevronRightSvg className="rotate-180 text-3xl text-secondary-foreground" />
          </button>
        )}
        {_itemStart + itemsPerPage < itemCount && (
          <button
            className={cn(
              'pointer-events-auto absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full border-2 border-divider bg-secondary p-2 text-foreground transition-opacity hover:opacity-70',
              'right-4 translate-x-1/2 md:right-0',
              isDealPage && 'hidden sm:block',
            )}
            onClick={onGoNext}
          >
            <ChevronRightSvg className="text-3xl text-secondary-foreground" />
          </button>
        )}
      </div>
    </>
  );
}
