import { redirect } from 'next/navigation';
import { allItems } from '@/app/consts/Items/index';
import DetailPage from '@/app/item/[id]/detail-page';

export type DetailPagePathProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: DetailPagePathProps) {
  const { id } = await params;
  const item = allItems[id];

  if (!item) return redirect('/');
  return <DetailPage item={item} />;
}
