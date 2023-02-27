import {
  ADD_TO_CART,
  DECREMENT_TO_CART,
  INCREMENT_TO_CART,
  REMOVE_FROM_CART,
} from "./actionTypes";

export const addToCart = (id, itemInfo) => {
  return {
    type: ADD_TO_CART,
    payload: {
      itemInfo,
      increment: 1,
    },
    id,
  };
};
export const incrementToCart = (id) => {
  return {
    type: INCREMENT_TO_CART,
    payload: 1,
    id,
  };
};

export const decrementToCart = (id) => {
  return {
    type: DECREMENT_TO_CART,
    payload: 1,
    id,
  };
};

export const deleteFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
