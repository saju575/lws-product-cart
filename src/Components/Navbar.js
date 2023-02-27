import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

export const Navbar = () => {
  return (
    <nav class="bg-[#171C2A] py-4">
      <div class="navBar">
        <NavLink to={"/"}>
          <img src={logo} alt="LWS" class="max-w-[140px]" />
        </NavLink>

        <div class="flex gap-4">
          <span href="#home" class="navHome" id="lws-home">
            {" "}
            <NavLink to={"/"}>Home</NavLink>
          </span>
          <NavLink to={"/cart"}>
            <span href="cart.html" class="navCart" id="lws-cart">
              <i class="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">0</span>
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
