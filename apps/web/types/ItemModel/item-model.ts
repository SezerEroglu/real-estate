import { ImageSrc } from '@repo/ui/types/image-src';

export type ItemModel = {
  id: string;
  properties: {
    srcs: {
      pictures: Array<ImageSrc>;
    };
    partner: {
      name: string;
      image: ImageSrc;
    };
    title: string;
    subtitle?: string;
    description?: string;
    regularPrice?: number;
    actualPrice: number;
    maxCustomerQuantity: number;
    contents: Array<{ title: string; body: string }>;
  };
};
