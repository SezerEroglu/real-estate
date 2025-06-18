import type { StaticImageData } from 'next/image';
// Hero Images
import desktopHero from '@/public/images/desktop-hero-image_1536x864_1.jpg';
// Hero Slider Images
import desktopHeroSlider from '@/public/images/desktop-hero-slider-image_712x672_1.jpg';
import laptopHeroSlider from '@/public/images/laptop-hero-slider-image_288x520_1.jpg';
import mobileHero from '@/public/images/mobile-hero-image-343x502_1.jpg';
import mobileHeroSlider from '@/public/images/mobile-hero-slider-image_343x280_1.jpg';
// Partner Image
import partnerFallback from '@/public/images/partner-image.jpg';
import detailImage1 from '@/public/images/slider-pdp_bild-1_1280x720.jpg';
import detailImage2 from '@/public/images/slider-pdp_bild-1_1280x720_2.jpg';
import detailImage3 from '@/public/images/slider-pdp_bild-3_1280x720_3.jpg';
import detailImage4 from '@/public/images/slider-pdp_bild-4_1280x720.jpg';
import tabletHero from '@/public/images/tablet-hero-image_768_432_1.jpg';
import tabletHeroSlider from '@/public/images/tablet-hero-slider-image_736x280_1.jpg';

export const heroImages: Record<string, StaticImageData> = {
  desktop: desktopHero,
  mobile: mobileHero,
  tablet: tabletHero,
  fallback: desktopHero,
};

export const heroSliderImages: Record<string, StaticImageData> = {
  desktop: desktopHeroSlider,
  laptop: laptopHeroSlider,
  tablet: tabletHeroSlider,
  mobile: mobileHeroSlider,
  fallback: desktopHeroSlider,
};

export const partnerImages: Record<string, StaticImageData> = {
  fallback: partnerFallback,
};

export const detailImages: Array<StaticImageData> = [
  detailImage1,
  detailImage2,
  detailImage3,
  detailImage4,
];
