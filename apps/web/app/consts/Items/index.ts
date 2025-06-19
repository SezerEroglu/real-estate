import estateItem1 from '@/app/consts/Items/estate-item-1';
import estateItem2 from '@/app/consts/Items/estate-item-2';
import estateItem3 from '@/app/consts/Items/estate-item-3';
import { ItemModel } from '@/types/ItemModel/item-model';

export const allItems: Record<string, ItemModel> = {
  [estateItem1.id.toString()]: estateItem1,
  [estateItem2.id.toString()]: estateItem2,
  [estateItem3.id.toString()]: estateItem3,
};
