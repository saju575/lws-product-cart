import React from "react";
import { useDispatch } from "react-redux";
import { addToCart as addToCartFromCart } from "../Redux/Cart/actions";

export const Product = ({ product, addToCart }) => {
  const { name, price, img, id, quantity, category } = product;
  const dispatch = useDispatch();
  return (
    // <!-- product item -->
    <div className="lws-productCard">
      <img className="lws-productImage" src={img} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{name}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className={`lws-btnAddToCart ${quantity <= 0 && "disable"}`}
          disabled={quantity <= 0 && true}
          onClick={() => {
            addToCart(id);
            dispatch(
              addToCartFromCart(id, {
                name,
                price,
                img,
                category,
                remaining: quantity - 1,
              })
            );
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
    //   <!-- product item ends -->;
  );
};
