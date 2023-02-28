import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Products/actions";
import { Product } from "./Product";

export const ProductsContainer = () => {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.length === 0 && <p>No Product Found</p>}
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          addToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};
