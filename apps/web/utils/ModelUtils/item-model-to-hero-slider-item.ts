import { HeroSliderItemProps } from '@repo/ui/hero-slider-item';
import { ItemModel } from '@/types/ItemModel/item-model';

export function mapItemToHeroSliderItemProps(
  item: ItemModel,
  className?: string,
): HeroSliderItemProps {
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
        desktopImage: displayImages?.desktopImage,
        tabletImage: displayImages?.tabletImage,
        laptopImage: displayImages?.laptopImage,
        mobileImage: displayImages?.mobileImage,
        fallbackImage: displayImages.fallbackImage,
      },
      partner,
      title,
      subtitle,
      regularPrice,
      actualPrice,
    },
    className,
    targetUrl: path,
  };
}
