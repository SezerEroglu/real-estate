'use client';

import { ReactNode } from 'react';
import NextImage, { StaticImageData } from 'next/image';

type Props = {
  src: string | StaticImageData;
  children?: ReactNode;
};

export default function HomePageHeroBanner({ src, children }: Props) {
  return (
    <div className="relative h-[380px] w-full overflow-hidden rounded-lg">
      <NextImage
        alt="HeroUI hero Image"
        className="h-full w-full max-w-full object-cover"
        height={200}
        src={src}
        width={300}
        priority
      />

      {/* Overlay container */}
      <div className="absolute inset-0 z-10 grid grid-rows-3">
        <div /> {/* Top third */}
        <div /> {/* Middle third */}
        <div className="flex items-center justify-center">{children}</div>{' '}
        {/* Bottom third */}
      </div>
    </div>
  );
}
