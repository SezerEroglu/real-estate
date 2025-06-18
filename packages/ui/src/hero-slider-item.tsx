'use client';

import React, { ReactNode, useMemo } from 'react';
import NextImage from 'next/image';
import EstateButton from './estate-button';
import { GridItem } from './grid-item';
import { HeartFavorite } from './heart-favourite';
import { Price } from './price';
import { ImageSrc } from './types/image-src';
import { Link } from '@heroui/react';
import { Image } from '@heroui/react';
import { cn } from '@heroui/react';

export type HeroSliderItemProps = {
  properties: {
    srcs: {
      desktopImage?: ImageSrc;
      tabletImage?: ImageSrc;
      laptopImage?: ImageSrc;
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
  className?: string;
  targetUrl?: string;
};

export function HeroSliderItem({
  properties,
  targetUrl,
  className,
}: HeroSliderItemProps) {
  const { desktopImage, tabletImage, mobileImage, laptopImage, fallbackImage } =
    properties.srcs;
  const title = properties.title;
  const subtitle = properties.subtitle;
  const regularPrice = properties.regularPrice;
  const actualPrice = properties.actualPrice;
  const partnerName = properties.partner.name;
  const partnerImage = properties.partner.image;

  return (
    <>
      <div className="lg:hidden">
        <GridItem
          className="bg-default-100"
          properties={properties}
          isInHeroSlider={true}
        />
      </div>
      <Link href={targetUrl}>
        <div
          className={cn(
            'relative hidden min-h-[600px] w-full flex-row gap-10 overflow-hidden rounded-[40px] bg-default-100 p-10 text-default-foreground lg:flex xl:aspect-[2/1]',
            className,
          )}
        >
          <div className="relative h-full w-full basis-1/3 overflow-hidden xl:basis-1/2">
            {/* Stripes */}
            {/* <DealStripe
                dealState={dealState}
                location="Hero Slider"
              ></DealStripe> */}
            {desktopImage?.src ? (
              <NextImage
                className={cn(
                  'hidden h-full w-full shrink-0 basis-1/2 overflow-hidden rounded-[20px] object-cover object-center xl:block',
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
              fallbackImage.src && (
                <NextImage
                  className={cn(
                    'hidden h-full w-full shrink-0 basis-1/2 overflow-hidden rounded-[20px] object-cover object-center xl:block',
                  )}
                  placeholder="blur"
                  blurDataURL={fallbackImage.blurDataURL}
                  src={fallbackImage.src}
                  alt="Deal Image"
                  quality={80}
                  width={768}
                  height={768}
                  //sizes="(min-width: 1280px) 50vw" // 50% of viewport width on desktop
                />
              )
            )}
            {laptopImage?.src ? (
              <NextImage
                className={cn(
                  'hidden h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center lg:block xl:hidden',
                )}
                placeholder="blur"
                blurDataURL={laptopImage.blurDataURL}
                src={laptopImage.src}
                alt="Deal Image"
                quality={80}
                width={450}
                height={450}
                //sizes="(min-width: 1024px) and (max-width: 1279px) 20vw" // 33% of viewport width on laptops
              />
            ) : (
              fallbackImage.src && (
                <NextImage
                  className={cn(
                    'hidden h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center lg:block xl:hidden',
                  )}
                  placeholder="blur"
                  blurDataURL={fallbackImage.blurDataURL}
                  src={fallbackImage.src}
                  alt="Deal Image"
                  quality={80}
                  width={450}
                  height={450}
                  //sizes="(min-width: 1024px) and (max-width: 1279px) 20vw"
                />
              )
            )}
            {tabletImage?.src ? (
              <NextImage
                className={cn(
                  'hidden h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center md:block lg:hidden xl:basis-1/2',
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
              fallbackImage.src && (
                <NextImage
                  className={cn(
                    'hidden h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center md:block lg:hidden xl:basis-1/2',
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
                  'h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center md:hidden xl:basis-1/2',
                )}
                placeholder="blur"
                blurDataURL={mobileImage.blurDataURL}
                src={mobileImage.src}
                alt="Deal Image"
                quality={80}
                width={450}
                height={450}
                //sizes="(max-width: 767px) 100vw" // 100% of viewport width on mobile
              />
            ) : (
              fallbackImage.src && (
                <NextImage
                  className={cn(
                    'h-full w-full shrink-0 basis-1/3 overflow-hidden rounded-[20px] object-cover object-center md:hidden xl:basis-1/2',
                  )}
                  placeholder="blur"
                  blurDataURL={fallbackImage.blurDataURL}
                  src={fallbackImage.src}
                  alt="Deal Image"
                  quality={80}
                  width={450}
                  height={450}
                  //sizes="(max-width: 767px) 100vw"
                />
              )
            )}
            <div className="text-md absolute left-0 right-0 top-0 flex w-full flex-row-reverse items-center justify-between">
              <div className="m-6">
                <HeartFavorite isHeroSlider />
              </div>
              {/* <span className="m-6 flex items-center rounded bg-neutral-100 px-4 py-4 text-aldi-key">
                <IconTag className="mr-2 text-base" />
                <span>Stark nachgefragt</span>
              </span> */}
            </div>
          </div>

          <div className="flex grow flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-6">
                <div className="overflow-hidden rounded-[20px]">
                  {partnerImage?.src && (
                    <NextImage
                      className="h-20 w-20 object-contain object-center"
                      placeholder="blur"
                      blurDataURL={partnerImage.blurDataURL}
                      src={partnerImage.src}
                      alt={partnerName}
                      quality={50}
                      width={96}
                      height={96}
                    />
                  )}
                </div>
                <h1 className="text-3xl font-bold lg:text-4xl">
                  {partnerName}
                </h1>
              </div>
              {/* <DealCountdown deal={deal} isHeroSlider={true} addNoch={true} /> */}
            </div>
            <div className="mt-10 grow">
              <h1 className="mb-4 !line-clamp-2 text-ellipsis text-5xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-[22px] font-[420] leading-7">{subtitle}</p>
            </div>
            <div>
              <div className="md:hidden">
                <Price
                  oldPrice={regularPrice}
                  actualPrice={actualPrice || 9999}
                  showDigits={true}
                  textSize={1}
                  badge={2}
                />
              </div>
              <div className="hidden md:mb-2 md:block 2xl:hidden">
                <Price
                  oldPrice={regularPrice}
                  actualPrice={actualPrice || 9999}
                  showDigits={true}
                  textSize={2}
                  badge={2}
                />
              </div>
              <div className="hidden md:mb-10 2xl:block">
                <Price
                  oldPrice={regularPrice}
                  actualPrice={actualPrice || 9999}
                  showDigits={true}
                  textSize={3}
                  badge={2}
                />
              </div>
              <EstateButton
                variant="solid"
                color="primary"
                href={targetUrl}
                size="lg"
                className="bg-primary px-6 text-2xl font-bold text-primary-foreground"
              >
                See Details
              </EstateButton>
              {/* <EstateButton
              variant="solid"
              color="primary"
              endContent={<IconArrowRight />}
              size="sm"
              className="h-14 text-lg font-semibold md:h-16 md:px-8 md:text-xl 2xl:h-20 2xl:text-2xl"
              onClick={() =>
                setTheme((current) => (current === 'light' ? 'dark' : 'light'))
              }
            >
              
            </EstateButton> */}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
