"use client";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";
import { IProduct } from "../services/product";

interface ICartProduct extends IProduct {
  quantity: number;
}

interface ICartContext {
  cart: Array<ICartProduct>;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
}

export const CartContext = createContext<ICartContext>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

// create reducer for cart
export const cartReducer = (
  state: Array<ICartProduct>,
  action: { type: string; payload: IProduct }
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const product = state.find((product) => product.id === action.payload.id);
      // if product is already in cart, increase quantity by 1
      if (product) {
        const newArray = state.filter(
          (product) => product.id !== action.payload.id
        );
        return [...newArray, { ...product, quantity: product.quantity + 1 }];
      }

      return [...state, { ...action.payload, quantity: 1 }];
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.id !== action.payload.id);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

// create provider for cart

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addToCart = (product: IProduct) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (product: IProduct) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: {} as IProduct });
  };
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
