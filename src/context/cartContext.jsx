/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const { state, addToCart, removeFromCart, cleanCart } =  useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
