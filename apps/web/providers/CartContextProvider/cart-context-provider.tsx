'use client';

import { createContext, useReducer } from 'react';
import type { Dispatch, ReactNode } from 'react';
import { CartModel } from '@/types/CartModel/cart-model';

export enum CartContextActionKind {
  UpdateCart = 'updateCart',
  DeleteCart = 'deleteCart',
}

export type CartContextAction =
  | {
      type: CartContextActionKind.UpdateCart;
      cart: CartModel;
    }
  | {
      type: CartContextActionKind.DeleteCart;
    };

export interface CartContextState {
  cart?: CartModel;
}

export interface CartContextInterface extends CartContextState {
  dispatch: Dispatch<CartContextAction>;
}

export const CartContext = createContext<CartContextInterface>({
  cart: undefined,
  dispatch: () => {
    throw new Error('CartContext not initialized');
  },
});

interface CartContextProviderProps {
  children: ReactNode;
  initialCart?: CartModel;
}

export function CartContextProvider({
  children,
  initialCart,
}: CartContextProviderProps) {
  const [state, dispatch] = useReducer(
    (state: CartContextState, action: CartContextAction) => {
      switch (action.type) {
        case CartContextActionKind.UpdateCart:
          return {
            cart: action.cart,
          } as CartContextState;
        case CartContextActionKind.DeleteCart:
          return {
            cart: {
              id: '1234',
              items: [],
            },
          } as CartContextState;
      }
    },
    {
      cart: initialCart,
    } as CartContextState,
  );

  return (
    <CartContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
