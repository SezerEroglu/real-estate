'use client';

import type { MouseEvent } from 'react';
import { useCallback, useRef, useState } from 'react';
import { IconHeart } from './svg/icon-heart';
import { cn } from '@heroui/react';

interface HeartFavoriteProps {
  isHeroSlider?: boolean;
  isDetailPage?: boolean;
}

export function HeartFavorite({
  isHeroSlider = false,
  isDetailPage = false,
}: HeartFavoriteProps) {
  const [isFavored, setIsFavored] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  const handleFavoriteChange = useCallback(() => {
    setIsFavored((prev) => !prev);
  }, []);

  const toggleFavorite = useCallback(async () => {
    if (iconRef.current?.classList) {
      iconRef.current.classList.remove('animate-pop');
    }
    requestAnimationFrame(() => {
      if (iconRef.current?.classList) {
        iconRef.current.classList.add('animate-pop');
      }
    });
    handleFavoriteChange();
  }, [handleFavoriteChange]);

  const handleOnClick = useCallback(
    async (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite();
      return false;
    },
    [isFavored, toggleFavorite],
  );
  const className1 = cn(
    'pointer-events-auto cursor-pointer rounded-full bg-white ' +
      (!!(isHeroSlider || isDetailPage) ? 'h-16 w-16' : 'h-12 w-12'),
  );
  const className2 = cn(
    'flex h-full w-full items-center justify-center rounded-full bg-aldi-key/10 transition-colors hover:bg-aldi-key/20',
  );
  return (
    <div className={className1} ref={iconRef} onClick={handleOnClick}>
      <div className={className2}>
        <IconHeart
          className={cn('text-red-600 text-2xl', isFavored && 'fill-red-600')}
        />
      </div>
    </div>
  );
}
