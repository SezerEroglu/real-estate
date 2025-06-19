import { HomePageHeroBannerProps } from '@repo/ui/home-page-hero-banner';
import { ItemModel } from '@/types/ItemModel/item-model';

export function mapItemToHomePageHeroBannerProps(
  item: ItemModel,
  children?: React.ReactNode,
): HomePageHeroBannerProps {
  const {
    displayImages,
    partner,
    title,
    subtitle,
    regularPrice,
    actualPrice,
    path,
  } = item.properties;

  return {
    properties: {
      srcs: {
        desktopHeroImage: displayImages?.desktopImage,
        tabletHeroImage: displayImages?.tabletImage,
        mobileHeroImage: displayImages?.mobileImage,
        fallbackHeroImage: displayImages.fallbackImage,
      },

      partner,
      title,
      subtitle,
      regularPrice,
      actualPrice,
    },
    targetUrl: path,
    children,
  };
}
