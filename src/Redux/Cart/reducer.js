import {
  ADD_TO_CART,
  DECREMENT_TO_CART,
  INCREMENT_TO_CART,
  REMOVE_FROM_CART,
} from "./actionTypes";
import cartState from "./inittialState";

const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.some((item) => item.id === action.id)) {
        return state.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              count: item.count + action.payload.increment,
              remaining: item.remaining - action.payload.increment,
            };
          }
          return item;
        });
      } else {
        return [
          ...state,
          {
            ...action.payload.itemInfo,
            count: 1,
            id: action.id,
          },
        ];
      }
    case INCREMENT_TO_CART:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            count: item.count + action.payload,
            remaining: item.remaining - action.payload,
          };
        }
        return item;
      });

    case DECREMENT_TO_CART:
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            count: item.count - action.payload,
            remaining: item.remaining + action.payload,
          };
        }
        return item;
      });

    case REMOVE_FROM_CART:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

export default cartReducer;
