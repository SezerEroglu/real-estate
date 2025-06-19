import { GridItemProps } from '@repo/ui/grid-item';
import { ItemModel } from '@/types/ItemModel/item-model';

export function mapItemToGridItemProps(
  item: ItemModel,
  className: string,
  isInHeroSlider: boolean,
  children?: React.ReactNode,
): GridItemProps {
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
        desktopImage: displayImages.desktopImage,
        tabletImage: displayImages.tabletImage,
        mobileImage: displayImages.mobileImage,
        fallbackImage: displayImages.fallbackImage,
      },
      partner,
      title,
      subtitle,
      regularPrice,
      actualPrice,
    },
    className,
    isInHeroSlider,
    targetUrl: path,
    children,
  };
}
