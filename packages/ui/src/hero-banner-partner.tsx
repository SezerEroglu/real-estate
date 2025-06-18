import NextImage from 'next/image';
import { ImageSrc } from './types/image-src';
import { cn as cnOriginal } from '@heroui/react';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface HeroBannerPartnerProps {
  partnerImage?: ImageSrc;
  partnerName: string;
}

export function cn(...input: ClassValue[]): string {
  return twMerge(cnOriginal(input));
}

export function HeroBannerPartner({
  partnerImage,
  partnerName,
}: HeroBannerPartnerProps) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 p-2 backdrop-blur-sm md:gap-4 md:bg-white/10 md:p-5">
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded bg-neutral-200/10 md:h-16 md:w-16 xl:h-24 xl:w-24',
        )}
      >
        {partnerImage?.src && (
          <NextImage
            src={partnerImage.src}
            placeholder="blur"
            blurDataURL={partnerImage.blurDataURL}
            alt={partnerName}
            quality={50}
            width={128}
            height={128}
            className="shrink-0 object-contain"
          />
        )}
      </div>
      <div className="text-white">
        <p className="text-xs text-white xl:text-base">Partner:</p>
        <h1 className="text-white md:text-xl xl:text-2xl">{partnerName}</h1>
      </div>
    </div>
  );
}
