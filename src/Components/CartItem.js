import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementToCart,
  deleteFromCart,
  incrementToCart,
} from "../Redux/Cart/actions";
import { addToCart, removeFromCart } from "../Redux/Products/actions";

export const CartItem = ({ cardItem }) => {
  const { name, price, count, img, id, remaining } = cardItem;
  const dispatch = useDispatch();
  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={img} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{name}</h4>
          <p className="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className={`lws-incrementQuantity ${
              remaining <= 0 && "disabled plus-disbaled"
            }`}
            disabled={remaining <= 0 && true}
            onClick={() => {
              dispatch(addToCart(id));
              dispatch(incrementToCart(id));
            }}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{count}</span>
          <button
            className={`lws-decrementQuantity ${
              count <= 1 && "disabled plus-disbaled"
            }`}
            disabled={count <= 1 && true}
            onClick={() => {
              dispatch(removeFromCart(id, 1));
              dispatch(decrementToCart(id));
            }}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT{" "}
          <span className="lws-calculatedPrice">
            {(price * count).toFixed(2)}
          </span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => {
            dispatch(removeFromCart(id, count));
            dispatch(deleteFromCart(id));
          }}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
