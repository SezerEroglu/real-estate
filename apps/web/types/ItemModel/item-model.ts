import { DetailsPerkCardProps } from '@/components/DetailPerkCard/detail-perk-card';
import { ImageSrc } from '@repo/ui/types/image-src';

export type ItemModel = {
  id: string;
  properties: {
    // 🖼️ Used in content/gallery/product page
    srcs: {
      pictures: Array<ImageSrc>;
    };

    // 🖥️ Used in hero/grid/slider placements
    displayImages: {
      desktopImage?: ImageSrc;
      tabletImage?: ImageSrc;
      laptopImage?: ImageSrc;
      mobileImage?: ImageSrc;
      fallbackImage: ImageSrc;
    };
    perks: DetailsPerkCardProps[];
    partner: {
      name: string;
      image: ImageSrc;
    };
    path: string;
    title: string;
    subtitle?: string;
    description?: string;
    regularPrice?: number;
    actualPrice: number;
    maxCustomerQuantity: number;
    contents: Array<{ title: string; body: string }>;
  };
};
