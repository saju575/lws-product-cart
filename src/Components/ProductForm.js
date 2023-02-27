import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/Products/actions";

export const ProductForm = () => {
  const [productInfo, setProductInfo] = useState({});
  const dispatch = useDispatch();
  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setProductInfo((values) => ({ ...values, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(productInfo));
    setProductInfo({
      name: "",
      category: "",
      img: "",
      price: "",
      quantity: "",
    });
  };
  // console.log(productInfo);
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        id="lws-addProductForm"
        onSubmit={submitHandler}
      >
        {/* <!-- product name --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputName">Product Name</label>
          <input
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            name="name"
            value={productInfo.name || ""}
            onChange={handleInput}
          />
        </div>
        {/* <!-- product category --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputCategory">Category</label>
          <input
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            name="category"
            value={productInfo.category || ""}
            onChange={handleInput}
          />
        </div>
        {/* <!-- product image url --> */}
        <div className="space-y-2">
          <label htmlFor="lws-inputImage">Image Url</label>
          <input
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            name="img"
            value={productInfo.img || ""}
            onChange={handleInput}
          />
        </div>
        {/* <!-- price & quantity container --> */}
        <div className="grid grid-cols-2 gap-8 pb-4">
          {/* <!-- price --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputPrice">Price</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              name="price"
              value={productInfo.price || ""}
              onChange={handleInput}
            />
          </div>
          {/* <!-- quantity --> */}
          <div className="space-y-2">
            <label htmlFor="lws-inputQuantity">Quantity</label>
            <input
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              name="quantity"
              value={productInfo.quantity || ""}
              onChange={handleInput}
            />
          </div>
        </div>
        {/* <!-- submit button --> */}
        <button type="submit" id="lws-inputSubmit" className="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};
