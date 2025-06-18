'use client';

import { useCallback, useContext, useEffect } from 'react';
import {
  CartContext,
  CartContextActionKind,
  CartContextInterface,
} from '@/providers/CartContextProvider/cart-context-provider';
import { CartItemModel, CartModel } from '@/types/CartModel/cart-model';
import { ItemModel } from '@/types/ItemModel/item-model';

export function useCart(): {
  cartContext: CartContextInterface;
  updateCartItem: (
    updatedItem: ItemModel | CartItemModel,
    quantity: number,
  ) => Promise<void>;
  removeCartItem: (itemId: string) => Promise<void>;
} {
  const cartContext = useContext(CartContext);

  const ensureCart = useCallback(async () => {
    if (cartContext.cart) {
      if (cartContext.cart.id) {
        document.cookie = `cart-id=${cartContext.cart.id}; path=/; max-age=31536000`;
        localStorage.setItem('cart', JSON.stringify(cartContext.cart));
      } else if (!cartContext.cart.id) {
        const newCart: CartModel = {
          id: '1234',
          items: [],
        };
        const cartFromStorage = JSON.parse(
          localStorage.getItem('cart') ?? JSON.stringify(newCart),
        );
        cartContext.dispatch({
          type: CartContextActionKind.UpdateCart,
          cart: cartFromStorage,
        });

        return cartFromStorage;
      } else {
        document.cookie =
          'cart-id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
      return cartContext.cart;
    }
    const newCart: CartModel = {
      id: '1234',
      items: [],
    };
    const cartFromStorage = JSON.parse(
      localStorage.getItem('cart') ?? JSON.stringify(newCart),
    );
    cartContext.dispatch({
      type: CartContextActionKind.UpdateCart,
      cart: cartFromStorage,
    });

    return cartFromStorage;
  }, [cartContext]);

  const updateCartItem = useCallback(
    async (updatedItem: ItemModel | CartItemModel, quantity: number) => {
      if (!cartContext.cart) return;
      const existingItemIndex = cartContext.cart.items.findIndex(
        (item) => item.id === updatedItem.id,
      );

      let updatedItems: CartItemModel[];

      if (existingItemIndex !== -1) {
        // Update existing item quantity
        updatedItems = cartContext.cart.items.map((item) =>
          item.id === updatedItem.id
            ? {
                ...item,
                properties: {
                  ...item.properties,
                  quantity,
                },
              }
            : item,
        );
      } else {
        const isItemModel = (item: any): item is ItemModel =>
          'actualPrice' in item.properties && 'title' in item.properties;

        const newItem: CartItemModel = isItemModel(updatedItem)
          ? {
              id: updatedItem.id,
              properties: {
                display: {
                  name: updatedItem.properties.title,
                },
                partner: {
                  name: updatedItem.properties.partner.name,
                  image: updatedItem.properties.partner.image.src ?? '',
                },
                pricing: {
                  regularPrice:
                    updatedItem.properties.regularPrice ??
                    updatedItem.properties.actualPrice,
                  actualPrice: updatedItem.properties.actualPrice,
                },
                maxOrderQuantity: updatedItem.properties.maxCustomerQuantity,
                quantity,
              },
            }
          : {
              ...updatedItem,
              properties: {
                ...updatedItem.properties,
                quantity,
              },
            };

        updatedItems = [...cartContext.cart.items, newItem];
      }

      const newCart: CartModel = {
        ...cartContext.cart,
        items: updatedItems,
      };

      cartContext.dispatch({
        type: CartContextActionKind.UpdateCart,
        cart: newCart,
      });
    },
    [cartContext],
  );

  const removeCartItem = useCallback(
    async (itemIdToRemove: string) => {
      if (!cartContext.cart) return;

      const updatedItems = cartContext.cart.items.filter(
        (item) => item.id !== itemIdToRemove,
      );

      const newCart: CartModel = {
        ...cartContext.cart,
        items: updatedItems,
      };

      cartContext.dispatch({
        type: CartContextActionKind.UpdateCart,
        cart: newCart,
      });
    },
    [cartContext],
  );

  useEffect(() => {
    (async function () {
      await ensureCart();
    })();
  }, [ensureCart]);

  return {
    cartContext,
    updateCartItem,
    removeCartItem,
  };
}
