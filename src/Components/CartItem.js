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
    <div class="cartCard">
      <div class="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img class="lws-cartImage" src={img} alt="product" />
        {/* <!-- cart item info --> */}
        <div class="space-y-2">
          <h4 class="lws-cartName">{name}</h4>
          <p class="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span class="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div class="flex items-center space-x-4">
          <button
            class={`lws-incrementQuantity ${
              remaining <= 0 && "disabled plus-disbaled"
            }`}
            disabled={remaining <= 0 && true}
            onClick={() => {
              dispatch(addToCart(id));
              dispatch(incrementToCart(id));
            }}
          >
            <i class="text-lg fa-solid fa-plus"></i>
          </button>
          <span class="lws-cartQuantity">{count}</span>
          <button
            class={`lws-decrementQuantity ${
              count <= 1 && "disabled plus-disbaled"
            }`}
            disabled={count <= 1 && true}
            onClick={() => {
              dispatch(removeFromCart(id, 1));
              dispatch(decrementToCart(id));
            }}
          >
            <i class="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p class="text-lg font-bold">
          BDT{" "}
          <span class="lws-calculatedPrice">{(price * count).toFixed(2)}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div class="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          class="lws-removeFromCart"
          onClick={() => {
            dispatch(removeFromCart(id, count));
            dispatch(deleteFromCart(id));
          }}
        >
          <i class="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};
