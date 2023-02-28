import React from "react";
import { useSelector } from "react-redux";
import { BillDetails } from "../Components/BillDetails";
import { CartItem } from "../Components/CartItem";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {/* <!-- Cart Item --> */}
            {cartItems.map((cartItem) => (
              <CartItem cardItem={cartItem} key={cartItem.id} />
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
