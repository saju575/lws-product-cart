import React from "react";
import { ProductForm } from "../Components/ProductForm";
import { ProductsContainer } from "../Components/ProductsContainer";

export const Home = () => {
  return (
    <main class="py-16">
      <div class="productWrapper">
        {/* <!-- products container --> */}
        <ProductsContainer />
        {/* <!-- products container ends --> */}

        {/* <!-- Product Input Form --> */}
        <ProductForm />
        {/* <!-- Product Input Form Ends --> */}
      </div>
    </main>
  );
};
