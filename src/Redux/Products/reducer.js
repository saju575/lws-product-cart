import { ADD_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";
import products from "./initialState";

const nextProductId = (products) => {
  const maxId = products.reduce((maxId, product) =>
    Math.max(product.id, maxId)
  );
  return maxId + 1;
};

const productReducer = (state = products, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...state, { ...action.payload, id: nextProductId(state) }];

    case ADD_TO_CART:
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });

    case REMOVE_FROM_CART:
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            quantity: product.quantity + action.payload,
          };
        }
        return product;
      });

    default:
      return state;
  }
};

export default productReducer;
