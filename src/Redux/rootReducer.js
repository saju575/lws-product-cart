import { combineReducers } from "redux";
import cartReducer from "./Cart/reducer";
import productReducer from "./Products/reducer";

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
