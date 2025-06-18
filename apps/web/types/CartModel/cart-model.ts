export type CartModel = {
  id: string;
  items: Array<CartItemModel>;
};

export type CartItemModel = {
  id: string;
  properties: {
    display: {
      name: string;
    };
    partner: {
      name: string;
      image: string;
    };
    pricing: {
      regularPrice: number;
      actualPrice: number;
    };
    maxOrderQuantity: number;
    quantity: number;
  };
};
