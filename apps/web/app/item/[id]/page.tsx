import DetailPage, { DetailPageProps } from '@/app/item/[id]/detail-page';
import { detailImages, partnerImages } from '@/public/images/images';
import { ItemModel } from '@/types/ItemModel/item-model';

export default function Page() {
  const item: ItemModel = {
    id: '12345',
    properties: {
      srcs: { pictures: detailImages },
      actualPrice: 10,
      regularPrice: 15,
      partner: {
        name: 'Partner Name',
        image: partnerImages.fallback!,
      },
      contents: [
        { title: 'Content Field 1 Title', body: 'Lorem ipsum dolor sit amet.' },
      ],
      title: 'Item Title',
      subtitle: 'Item subtitle',
      maxCustomerQuantity: 30,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque vitae nemo, accusamus eaque enim quaerat adipisci deleniti neque, accusantium in debitis illo quibusdam libero delectus esse consectetur aliquam provident.',
    },
  };
  return <DetailPage item={item}></DetailPage>;
}
