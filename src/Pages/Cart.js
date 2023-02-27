import React from "react";
import { useSelector } from "react-redux";
import { BillDetails } from "../Components/BillDetails";
import { CartItem } from "../Components/CartItem";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <main class="py-16">
      <div class="container 2xl:px-8 px-2 mx-auto">
        <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div class="cartListContainer">
          <div class="space-y-6">
            {/* <!-- Cart Item --> */}
            {cartItems.map((cartItem) => (
              <CartItem cardItem={cartItem} />
            ))}
            {/* <!-- Cart Items Ends --> */}

            {/* <!-- Cart Items Ends --> */}
          </div>

          {/* <!-- Bill Details --> */}

          <BillDetails />
          {/* <!-- Bill Details Ends --> */}
        </div>
      </div>
    </main>
  );
};
