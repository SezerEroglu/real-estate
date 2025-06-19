import type { StaticImageData } from 'next/image';
//Estate 1
import estate1Detail1 from '@/public/images/Estate1/Estate1-detail-1.jpg';
import estate1Detail2 from '@/public/images/Estate1/Estate1-detail-2.jpg';
import estate1Detail3 from '@/public/images/Estate1/Estate1-detail-3.jpg';
import estate1Detail4 from '@/public/images/Estate1/Estate1-detail-4.jpg';
import estate1Detail5 from '@/public/images/Estate1/Estate1-detail-5.jpg';
import estate1Partner from '@/public/images/Estate1/skyline-estates-dubai.png';
//Estate 2
import estate2Detail1 from '@/public/images/Estate2/Estate2-detail-1.jpg';
import estate2Detail2 from '@/public/images/Estate2/Estate2-detail-2.jpg';
import estate2Detail3 from '@/public/images/Estate2/Estate2-detail-3.jpg';
import estate2Detail4 from '@/public/images/Estate2/Estate2-detail-4.jpg';
import estate2Detail5 from '@/public/images/Estate2/Estate2-detail-5.jpg';
import estate2Partner from '@/public/images/Estate2/azure-living-group.png';
//Estate 3
import estate3Detail1 from '@/public/images/Estate3/Estate3-detail-1.jpg';
import estate3Detail2 from '@/public/images/Estate3/Estate3-detail-2.jpg';
import estate3Detail3 from '@/public/images/Estate3/Estate3-detail-3.jpg';
import estate3Detail4 from '@/public/images/Estate3/Estate3-detail-4.jpg';
import estate3Detail5 from '@/public/images/Estate3/Estate3-detail-5.jpg';
import estate3Partner from '@/public/images/Estate3/serenity-developments.png';
// Hero Images
import desktopHero from '@/public/images/desktop-hero-image_1536x864_1.jpg';
// Hero Slider Images
import desktopHeroSlider from '@/public/images/desktop-hero-slider-image_712x672_1.jpg';
import laptopHeroSlider from '@/public/images/laptop-hero-slider-image_288x520_1.jpg';
import mobileHero from '@/public/images/mobile-hero-image-343x502_1.jpg';
import mobileHeroSlider from '@/public/images/mobile-hero-slider-image_343x280_1.jpg';
// Partner Image
import partnerFallback from '@/public/images/partner-image.jpg';
import detailImagev2_1 from '@/public/images/slider-pdp-v2-1.jpg';
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

export const detailImages: Array<StaticImageData> = [
  detailImagev2_1,
  detailImage1,
  detailImage2,
  detailImage3,
  detailImage4,
];

export const estate1DetailImages: Array<StaticImageData> = [
  estate1Detail1,
  estate1Detail2,
  estate1Detail3,
  estate1Detail4,
  estate1Detail5,
];

export const estate1PartnerImage: Record<string, StaticImageData> = {
  fallback: estate1Partner,
};

export const estate2DetailImages: Array<StaticImageData> = [
  estate2Detail1,
  estate2Detail2,
  estate2Detail3,
  estate2Detail4,
  estate2Detail5,
];

export const estate2PartnerImage: Record<string, StaticImageData> = {
  fallback: estate2Partner,
};

export const estate3DetailImages: Array<StaticImageData> = [
  estate3Detail1,
  estate3Detail2,
  estate3Detail3,
  estate3Detail4,
  estate3Detail5,
];

export const estate3PartnerImage: Record<string, StaticImageData> = {
  fallback: estate3Partner,
};
