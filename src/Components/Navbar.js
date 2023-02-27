import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export const Navbar = () => {
  const numberOfItemInCart = useSelector((state) =>
    state.cart.reduce((count, item) => count + item.count, 0)
  );
  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <NavLink to={"/"}>
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </NavLink>

        <div className="flex gap-4">
          <span href="#home" className="navHome" id="lws-home">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </span>
          <NavLink to={"/cart"}>
            <span href="cart.html" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{numberOfItemInCart}</span>
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
