import { HeroSlider } from '@repo/ui/hero-slider';
import { HeroSliderItem, HeroSliderItemProps } from '@repo/ui/hero-slider-item';
import HomePageHeroBanner, {
  type HomePageHeroBannerProps,
} from '@repo/ui/home-page-hero-banner';
import {
  heroImages,
  heroSliderImages,
  partnerImages,
} from '@/public/images/images';

export default function Page() {
  const heroBannerProps: HomePageHeroBannerProps = {
    properties: {
      actualPrice: 10,
      title: 'Hero Banner Title',
      subtitle: 'Hero Banner Subtitle',
      regularPrice: 15,
      partner: {
        name: 'Partner Name',
        image: { ...partnerImages.fallback },
      },
      srcs: {
        desktopHeroImage: { ...heroImages.desktop },
        tabletHeroImage: { ...heroImages.tablet },
        mobileHeroImage: { ...heroImages.mobile },
        fallbackHeroImage: { ...heroImages.fallback },
      },
    },
    targetUrl: '/item/item1',
  };

  const heroSliderProps: HeroSliderItemProps = {
    properties: {
      actualPrice: 10,
      title: 'Hero Slider Title',
      subtitle: 'Hero Slider Subtitle',
      regularPrice: 15,
      partner: {
        name: 'Partner Name',
        image: { ...partnerImages.fallback },
      },
      srcs: {
        desktopImage: { ...heroSliderImages.desktop },
        laptopImage: { ...heroSliderImages.laptop },
        tabletImage: { ...heroSliderImages.tablet },
        mobileImage: { ...heroSliderImages.mobile },
        fallbackImage: { ...heroSliderImages.fallback },
      },
    },
    targetUrl: '/item/item1',
  };

  return (
    <div className="mx-auto w-full">
      <div className="grid-cols-12">
        <div className="container col-span-full mx-auto mt-10 px-4">
          <HomePageHeroBanner
            properties={heroBannerProps.properties}
            targetUrl={heroBannerProps.targetUrl}
          />
        </div>
        <div className="container col-span-full mx-auto mt-10 px-4">
          <HeroSlider title="Hero Slider">
            <HeroSliderItem
              properties={heroSliderProps.properties}
              targetUrl={heroBannerProps.targetUrl}
            ></HeroSliderItem>
            <HeroSliderItem
              properties={heroSliderProps.properties}
              targetUrl={heroBannerProps.targetUrl}
            ></HeroSliderItem>
            <HeroSliderItem
              properties={heroSliderProps.properties}
              targetUrl={heroBannerProps.targetUrl}
            ></HeroSliderItem>
          </HeroSlider>
        </div>
      </div>
    </div>
  );
}
