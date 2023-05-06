import { useEffect, useReducer } from "react";
import { reducer, initialState } from "../reducers/cartReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

export const useCartReducer = () => {

  const [state, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));

  }, [state]);

  const addToCart = product => dispatch({
    type: "ADD_TO_CART",
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: "REMOVE_FROM_CART",
    payload: product
  })

  const cleanCart = () => dispatch({ type: "CLEAN_CART"})

  return {
    state,
    addToCart,
    removeFromCart,
    cleanCart    
  }
}
