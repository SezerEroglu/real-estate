'use client';

import type { MouseEvent, ReactNode } from 'react';
import { useCallback, useRef } from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import EstateButton from './estate-button';
import { HeartFavorite } from './heart-favourite';
import { Price } from './price';
import { IconArrowRight } from './svg/icon-arrow-right';
import { IconOnline } from './svg/icon-online';
import { ImageSrc } from './types/image-src';
import { cn } from '@heroui/react';

export type GridItemProps = {
  properties: {
    srcs: {
      desktopImage?: ImageSrc;
      tabletImage?: ImageSrc;
      mobileImage?: ImageSrc;
      fallbackImage: ImageSrc;
    };
    partner: {
      name: string;
      image: ImageSrc;
    };
    title: string;
    subtitle?: string;
    regularPrice?: number;
    actualPrice: number;
  };
  className: string;
  isInHeroSlider: boolean;
  targetUrl?: string;
  children?: ReactNode;
};

export function GridItem({
  properties,
  targetUrl,
  className,
  isInHeroSlider = false,
}: GridItemProps) {
  const title = properties.title;
  const regularPrice = properties.regularPrice;
  const actualPrice = properties.actualPrice;
  const partnerImage = properties.partner.image;
  let desktopImage = undefined;
  let laptopImage = undefined;
  let tabletImage = undefined;
  let mobileImage = undefined;
  let fallbackImage = properties.srcs.fallbackImage;
  if (isInHeroSlider) {
    desktopImage = properties.srcs.desktopImage;
    tabletImage = properties.srcs.tabletImage;
    mobileImage = properties.srcs.mobileImage;
    laptopImage = properties.srcs.mobileImage;
  } else {
    desktopImage = properties.srcs.fallbackImage;
    laptopImage = desktopImage;
    tabletImage = desktopImage;
    mobileImage = desktopImage;
  }
  const interactionContainer = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleOnClick = useCallback(
    (e: MouseEvent) => {
      if (
        interactionContainer.current &&
        interactionContainer.current.contains(e.target as Node)
      ) {
        e.preventDefault();
      } else {
        router.push(targetUrl ?? '#');
      }
    },
    [router, targetUrl],
  );

  return (
    <a
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl bg-default transition-shadow hover:shadow-xl hover:shadow-black/5',
        className,
      )}
      onClick={handleOnClick}
      href={targetUrl}
    >
      {/* Stripes  */}
      {/* <DealStripe dealState={dealState} location="Grid"></DealStripe> */}
      {desktopImage?.src ? (
        <NextImage
          className={cn(
            'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 xl:block',
          )}
          placeholder="blur"
          blurDataURL={desktopImage.blurDataURL}
          src={desktopImage.src}
          alt="Deal Image"
          quality={80}
          width={768}
          height={768}
          //sizes="(min-width: 1280px) 50vw" // 50% of viewport width on desktop
        />
      ) : (
        fallbackImage?.src && (
          <NextImage
            className={cn(
              'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 xl:block',
            )}
            placeholder="blur"
            blurDataURL={fallbackImage.blurDataURL}
            src={fallbackImage.src}
            alt="Deal Image"
            quality={80}
            width={768}
            height={768}
            //sizes="(min-width: 1280px) 50vw"
          />
        )
      )}

      {laptopImage?.src ? (
        <NextImage
          className={cn(
            'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 lg:block xl:hidden',
          )}
          placeholder="blur"
          blurDataURL={laptopImage.blurDataURL}
          src={laptopImage.src}
          alt="Deal Image"
          quality={80}
          width={768}
          height={768}
          //sizes="(min-width: 1024px) and (max-width: 1279px) 33vw" // 33% of viewport width on laptops
        />
      ) : (
        fallbackImage?.src && (
          <NextImage
            className={cn(
              'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 lg:block xl:hidden',
            )}
            placeholder="blur"
            blurDataURL={fallbackImage.blurDataURL}
            src={fallbackImage.src}
            alt="Deal Image"
            quality={80}
            width={768}
            height={768}
            //sizes="(min-width: 1024px) and (max-width: 1279px) 33vw"
          />
        )
      )}

      {tabletImage?.src ? (
        <NextImage
          className={cn(
            'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 md:block lg:hidden',
          )}
          placeholder="blur"
          blurDataURL={tabletImage.blurDataURL}
          src={tabletImage.src}
          alt="Deal Image"
          quality={80}
          width={768}
          height={768}
          //sizes="(min-width: 768px) and (max-width: 1023px) 50vw" // 50% of viewport width on tablets
        />
      ) : (
        fallbackImage?.src && (
          <NextImage
            className={cn(
              'hidden h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 md:block lg:hidden',
            )}
            placeholder="blur"
            blurDataURL={fallbackImage.blurDataURL}
            src={fallbackImage.src}
            alt="Deal Image"
            quality={80}
            width={768}
            height={768}
            //sizes="(min-width: 768px) and (max-width: 1023px) 50vw"
          />
        )
      )}

      {mobileImage?.src ? (
        <NextImage
          className={cn(
            'h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 md:hidden',
          )}
          placeholder="blur"
          blurDataURL={mobileImage.blurDataURL}
          src={mobileImage.src}
          alt="Deal Image"
          quality={80}
          width={450}
          height={450}
          //sizes="(max-width: 450px) 100vw" // 100% of viewport width on mobile
        />
      ) : (
        fallbackImage?.src && (
          <NextImage
            className={cn(
              'h-[280px] object-cover object-center transition-opacity group-hover:opacity-80 md:hidden',
            )}
            placeholder="blur"
            blurDataURL={fallbackImage.blurDataURL}
            src={fallbackImage.src}
            alt="Deal Image"
            quality={80}
            width={450}
            height={450}
            //sizes="(max-width: 450px) 100vw"
          />
        )
      )}
      <div className="absolute left-0 right-0 top-0 flex flex-row-reverse items-center justify-between p-6">
        <div ref={interactionContainer}>
          <HeartFavorite />
        </div>

        {/* <span className="flex items-center rounded-lg bg-secondary px-4 py-2.5 text-sm font-light text-secondary-foreground">
          <IconOnline className="mr-2 text-base" />
          <span>Nur Online</span>
        </span> */}
      </div>
      {/* </div> */}
      <div className="flex grow flex-col gap-2 p-4 md:p-6">
        <div className="flex flex-row items-center justify-between">
          {partnerImage?.src && (
            <NextImage
              className="mr-2 max-h-10 max-w-10 flex-1 object-contain object-left"
              alt="Supplier Image"
              placeholder="blur"
              blurDataURL={partnerImage.blurDataURL}
              src={partnerImage.src}
              quality={50}
              width={48}
              height={48}
            />
          )}
        </div>

        <div className="my-2 min-h-16 text-3xl font-bold lg:text-2xl">
          {title}
        </div>
        <div className="flex flex-row justify-between">
          <Price
            oldPrice={regularPrice}
            actualPrice={actualPrice || 9999}
            showDigits={true}
            textSize={2}
          />
          {/* {ctaType === 'inline' && (
              <AldiButton variant="ghost" isIconOnly={true}>
                <IconArrowRight className="text-xl text-secondary/10" />
              </AldiButton>
            )} */}
        </div>
        <EstateButton
          variant="solid"
          color="primary"
          href={targetUrl}
          fullWidth={true}
          endContent={<IconArrowRight className="text-xl" />}
        >
          {'Jetzt Deal sichern'}
        </EstateButton>
      </div>
    </a>
  );
}
