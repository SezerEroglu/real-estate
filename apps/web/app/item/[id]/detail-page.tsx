'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn, Divider } from '@heroui/react';
import DetailPageCarousel from '@repo/ui/detail-page-carousel';
import FadeInOnScroll from '@repo/ui/effects/fade-in-on-scroll';
import { HeartFavorite } from '@repo/ui/heart-favourite';
import { Price } from '@repo/ui/price';
import AddToCart from '@/components/AddToCart/add-to-cart';
import DetailsPerkCard from '@/components/DetailPerkCard/detail-perk-card';
import ChevronRightSvg from '@/components/svg/ChevronRightSvg/chevron-right-svg';
import { ItemModel } from '@/types/ItemModel/item-model';

export type DetailPageProps = {
  item: ItemModel;
  children?: ReactNode;
};

export default function DetailPage({ item, children }: DetailPageProps) {
  const {
    srcs,
    partner,
    title,
    // subtitle,
    regularPrice,
    actualPrice,
    contents,
    description,
    // maxCustomerQuantity,
    perks,
  } = item.properties;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // const maxOrderQuantity = (() => {
  //   if (maxCustomerQuantity == undefined) return 999;
  //   if (maxCustomerQuantity > 0) return maxCustomerQuantity;
  //   return 999;
  // })();

  return (
    <div>
      <div className="border-b">
        <div className="container mx-auto flex flex-row items-center space-x-2 p-4 text-foreground">
          <Link href="/" className="text-foreground">
            Start
          </Link>
          <ChevronRightSvg />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap font-bold">
            {title}
          </span>
        </div>
      </div>
      <div className="container mx-auto space-y-10 px-4 py-4 md:px-10 xl:py-20">
        <div className="grid grid-cols-12 xl:gap-10">
          <div className="col-span-12 flex grow flex-col gap-y-4 lg:gap-y-10 2xl:col-span-7">
            <DetailPageCarousel itemStart={0} itemsPerPage={5}>
              {srcs.pictures?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={cn(
                      'bg-primary2 relative flex aspect-video h-auto min-h-[160px] w-full items-center justify-center overflow-hidden rounded-[20px] bg-center object-cover backdrop-blur lg:min-h-[480px] lg:rounded-[20px]',
                      activeImageIndex === index && 'border-secondary',
                    )}
                    onClick={() => setActiveImageIndex(index)}
                  >
                    <div className="absolute left-0 right-0 top-0 flex flex-row-reverse justify-between p-6"></div>
                    {image.src && (
                      <>
                        <Image
                          src={image.src}
                          placeholder="blur"
                          blurDataURL={image.blurDataURL}
                          // className={cn(
                          //   'block aspect-video h-auto min-h-[160px] w-full overflow-hidden rounded-[20px] bg-center object-cover lg:min-h-[480px]',
                          // )}
                          className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
                          alt="Product Image"
                          quality={80}
                          width={1200}
                          height={1200}
                          //sizes="(max-width: 767px) 100vw, (min-width: 768px) and (max-width: 1023px) 50vw, (min-width: 1024px) 50vw"
                        />
                        <Image
                          src={image.src}
                          placeholder="blur"
                          blurDataURL={image.blurDataURL}
                          // className={cn(
                          //   'block aspect-video h-auto min-h-[160px] w-full overflow-hidden rounded-[20px] bg-center object-cover lg:min-h-[480px]',
                          // )}
                          className="relative z-10 h-full w-full object-contain"
                          alt="Product Image"
                          quality={80}
                          width={1200}
                          height={1200}
                          //sizes="(max-width: 767px) 100vw, (min-width: 768px) and (max-width: 1023px) 50vw, (min-width: 1024px) 50vw"
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </DetailPageCarousel>
            <div className="hidden gap-y-10 lg:flex lg:flex-col">
              <Divider />
              <div className="grid grid-cols-2 justify-items-center gap-4 md:flex md:flex-row md:flex-wrap">
                {perks.map((perk) => (
                  <DetailsPerkCard key={perk.perk} perk={perk.perk} />
                ))}
              </div>
              <Divider />
              {contents.map(({ title, body }, index) => (
                <FadeInOnScroll key={index + 'dt'}>
                  <div className="bg-secondary1 text-secondary1-foreground flex flex-col space-y-6 rounded-lg border border-divider/5 p-4 shadow-none transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-200 md:p-10 lg:rounded-[20px]">
                    <h1 className="text-md font-bold md:text-xl">{title}</h1>
                    <div
                      className="richtext-field whitespace-pre-line text-sm md:text-lg"
                      // dangerouslySetInnerHTML={{
                      //   __html: { body },
                      // }}
                    >
                      <p>{body}</p>
                    </div>
                  </div>
                </FadeInOnScroll>
              ))}
            </div>
          </div>
          <div className="col-span-12 flex h-min flex-col gap-4 lg:sticky lg:right-0 lg:top-36 2xl:col-span-5">
            <div className="bg-primary2 text-primary2-foreground flex grow flex-col gap-y-6 rounded-[20px] border border-divider/10 p-10">
              <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
                <div className="hidden md:block">
                  <HeartFavorite isDetailPage />
                </div>
              </div>
              <Divider />
              {description && (
                <div
                  className="richtext-field"
                  // dangerouslySetInnerHTML={{
                  //   __html: description,
                  // }}
                >
                  <p>{description}</p>
                </div>
              )}
              <Divider />
              <div className="flex grow flex-col justify-end">
                <div>
                  <div className="md:hidden">
                    <Price
                      oldPrice={regularPrice}
                      actualPrice={actualPrice || 9999}
                      showDigits={true}
                      textSize={1}
                    />
                  </div>
                  <div className="hidden md:block">
                    <Price
                      oldPrice={regularPrice}
                      actualPrice={actualPrice || 9999}
                      showDigits={true}
                      textSize={2}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden flex-col gap-2 lg:flex">
                <AddToCart item={item} />
              </div>
            </div>
            <div className="rounded-[20px] border border-divider/10 bg-background p-10 text-foreground">
              <div className="flex flex-col gap-y-4 md:flex-row md:justify-between lg:flex-col">
                <div className="flex grow-0 flex-row items-center gap-4">
                  <Image
                    src={partner.image.src!}
                    placeholder="blur"
                    blurDataURL={partner.image.blurDataURL}
                    alt={partner.name}
                    quality={80}
                    width={64}
                    height={64}
                    className="shrink-0 object-contain"
                  />
                  <div className="flex flex-col">
                    <div className="text-sm font-medium">Partner:</div>
                    <div className="text-2xl font-medium">{partner.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 lg:hidden xl:gap-10">
          <div className="col-span-12 flex grow flex-col gap-y-4 lg:gap-y-10 2xl:col-span-7">
            <Divider />
            <div className="grid grid-cols-2 justify-items-center gap-2 md:flex md:flex-row md:flex-wrap md:gap-4">
              {perks.map((perk) => (
                <DetailsPerkCard key={perk.perk} perk={perk.perk} />
              ))}
            </div>
            <Divider />
            {contents.map(({ title, body }, index) => (
              <FadeInOnScroll key={index + 'dt'}>
                <div
                  key={index + 'mb'}
                  className="bg-secondary1 text-secondary1-foreground flex flex-col space-y-6 rounded-lg border border-divider/5 p-10 shadow-none transition-transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-200 md:p-10 lg:rounded-[20px]"
                >
                  <h1 className="text-md font-bold md:text-xl">{title}</h1>
                  <div
                    className="richtext-field whitespace-pre-line text-sm md:text-lg"
                    // dangerouslySetInnerHTML={{
                    //   __html: body,
                    // }}
                  >
                    <p>{body}</p>
                  </div>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background p-4 text-foreground lg:hidden">
        <div className="flex flex-col gap-2">
          <AddToCart item={item} />
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 row-span-1 mb-20 bg-background text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
