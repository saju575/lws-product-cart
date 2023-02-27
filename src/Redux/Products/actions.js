import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const addToCart = (id) => {
  return {
    type: ADD_TO_CART,
    id,
  };
};

export const removeFromCart = (id, numberOfItem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: numberOfItem,
    id,
  };
};
