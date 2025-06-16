'use client';

import { ReactNode } from 'react';
import NextImage from 'next/image';
import EstateButton from './estate-button';
import { HeroBannerPartner } from './hero-banner-partner';
import { Price } from './price';
import { IconArrowRight } from './svg/icon-arrow-right';
import { ImageSrc } from './types/image-src';
import { Image } from '@heroui/image';
import { Link } from '@heroui/link';
import { useTheme } from 'next-themes';

export type HomePageHeroBannerProps = {
  properties: {
    srcs: {
      desktopHeroImage?: ImageSrc;
      tabletHeroImage?: ImageSrc;
      mobileHeroImage?: ImageSrc;
      fallbackHeroImage: ImageSrc;
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
  targetUrl?: string;
  children?: ReactNode;
};

export default function HomePageHeroBanner({
  properties,
  targetUrl,
  children,
}: HomePageHeroBannerProps) {
  const {
    desktopHeroImage,
    tabletHeroImage,
    mobileHeroImage,
    fallbackHeroImage,
  } = properties.srcs;
  const title = properties.title;
  const subtitle = properties.subtitle;
  const regularPrice = properties.regularPrice;
  const actualPrice = properties.actualPrice;
  const partnerName = properties.partner.name;
  const partnerImage = properties.partner.image;
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Link
        className="relative block aspect-[328/480] overflow-hidden rounded-2xl transition-opacity hover:opacity-95 md:aspect-video md:rounded-3xl xl:rounded-[40px]"
        href={targetUrl}
      >
        {/* Stripes */}
        {/* <DealStripe dealState={dealState} location="Hero Banner"></DealStripe> */}
        {desktopHeroImage?.src ? (
          <NextImage
            src={desktopHeroImage.src}
            blurDataURL={desktopHeroImage.blurDataURL}
            alt="Desktop Hero Image"
            width={1920}
            height={1920}
            quality={80}
            className="hidden h-full object-cover object-center lg:block"
            //sizes="(min-width: 1280px) 100vw" // 100% of viewport width on large screens
          />
        ) : (
          fallbackHeroImage.src && (
            <NextImage
              src={fallbackHeroImage.src}
              blurDataURL={fallbackHeroImage.blurDataURL}
              placeholder="blur"
              alt="Desktop Hero Image"
              width={1920}
              height={1920}
              quality={80}
              className="hidden h-full object-cover object-center lg:block"
              //sizes="(min-width: 1280px) 100vw"
            />
          )
        )}

        {tabletHeroImage?.src ? (
          <NextImage
            src={tabletHeroImage.src}
            blurDataURL={tabletHeroImage.blurDataURL}
            placeholder="blur"
            alt="Tablet Hero Image"
            width={768}
            height={768}
            quality={80}
            className="hidden h-full object-cover object-center md:block lg:hidden"
            //sizes="(min-width: 768px) and (max-width: 1023px) 100vw" // 100% of viewport width on tablets
          />
        ) : (
          fallbackHeroImage.src && (
            <NextImage
              src={fallbackHeroImage.src}
              placeholder="blur"
              blurDataURL={fallbackHeroImage.blurDataURL}
              alt="Tablet Hero Image"
              width={768}
              height={768}
              quality={80}
              className="hidden h-full object-cover object-center md:block lg:hidden"
              //sizes="(min-width: 768px) and (max-width: 1023px) 100vw"
            />
          )
        )}

        {mobileHeroImage?.src ? (
          <NextImage
            src={mobileHeroImage.src}
            placeholder="blur"
            blurDataURL={mobileHeroImage.blurDataURL}
            alt="Mobile Hero Image"
            width={450}
            height={450}
            quality={80}
            className="h-full object-cover object-center md:hidden"
            //sizes="(max-width: 767px) 100vw" // 100% of viewport width on mobile devices
          />
        ) : (
          fallbackHeroImage.src && (
            <NextImage
              src={fallbackHeroImage.src}
              placeholder="blur"
              blurDataURL={fallbackHeroImage.blurDataURL}
              alt="Mobile Hero Image"
              width={450}
              height={450}
              quality={80}
              className="h-full object-cover object-center md:hidden"
              //sizes="(max-width: 767px) 100vw"
            />
          )
        )}

        <div className="absolute bottom-0 left-0 right-0 top-0 z-10 bg-gradient-to-b from-transparent to-black/75" />
        <div className="absolute bottom-0 left-0 right-0 z-20 flex w-full flex-col p-4 md:p-10 xl:p-20">
          <div className="mb-4 xl:mb-8">
            {/* <DealCountdownHeroBanner deal={fullDeal}></DealCountdownHeroBanner> */}
          </div>
          <div>
            <h1 className="!line-clamp-4 inline-block overflow-hidden text-ellipsis text-3xl font-bold uppercase !leading-[1.2] text-primary md:line-clamp-3 xl:line-clamp-2 xl:text-7xl">
              {title}
            </h1>
          </div>
          {subtitle && (
            <div>
              <h2 className="!line-clamp-4 inline-block overflow-hidden text-ellipsis text-base !leading-[1.2] text-primary md:line-clamp-3 xl:line-clamp-2 xl:text-3xl">
                {subtitle}
              </h2>
            </div>
          )}
          <div className="my-4 flex flex-row items-center gap-2 md:my-4 md:gap-4 xl:mb-14 xl:mt-6">
            <div className="md:hidden">
              <Price
                oldPrice={regularPrice}
                actualPrice={actualPrice || 9999}
                showDigits={true}
                // customOldPricePrefix={
                //   fullDeal.properties?.customOldPricePrefix ?? ''
                // }
                // customSavingsText={fullDeal.properties?.customSavingsText}
                // customPricePrefix={fullDeal.properties?.customPricePrefix}
                // superscriptText={fullDeal.properties?.legalSuperscript}
                textSize={1}
                badge={3}
                variant="light"
              />
            </div>
            <div className="hidden md:block 2xl:hidden">
              <Price
                oldPrice={regularPrice}
                actualPrice={actualPrice || 9999}
                showDigits={true}
                textSize={2}
                badge={3}
                variant="light"
              />
            </div>
            <div className="hidden 2xl:block">
              <Price
                oldPrice={regularPrice}
                actualPrice={actualPrice || 9999}
                textSize={3}
                badge={3}
                variant="light"
              />
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <EstateButton
              variant="solid"
              color="primary"
              endContent={<IconArrowRight />}
              onClick={() =>
                setTheme((current) => {
                  console.log(theme);
                  if (current == 'light') {
                    return 'dark';
                  }
                  return 'light';
                })
              }
              size="sm"
              className="h-14 text-lg font-semibold md:h-16 md:px-8 md:text-xl 2xl:h-20 2xl:text-2xl"
            >
              {'Jetzt Deal sichern'}
            </EstateButton>
            <div className="hidden md:inline-block">
              <HeroBannerPartner
                partnerImage={{
                  src: partnerImage.src,
                  blurDataURL: partnerImage.blurDataURL,
                }}
                partnerName={partnerName}
              />
            </div>
          </div>
        </div>
        <div className="absolute left-0 top-0 z-20 p-4 md:hidden md:p-10 xl:p-20">
          <HeroBannerPartner
            partnerImage={{
              src: partnerImage.src,
              blurDataURL: partnerImage.blurDataURL,
            }}
            partnerName={partnerName}
          />
        </div>
      </Link>
    </div>
  );
}
