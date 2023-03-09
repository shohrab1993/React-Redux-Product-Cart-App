import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navigation = () => {
  const cartItem = useSelector((state) => state.cart);
  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <Link to="/">
            {/* <img src="" alt="LWS" className="max-w-[140px]" /> */}
            <p>Product Shop</p>
          </Link>

          <div className="flex gap-4">
            <Link to="/" className="navHome" id="lws-home">
              Home
            </Link>
            <Link to="/cart-page" className="navCart" id="lws-cart">
              <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
              <span id="lws-totalCart">{cartItem.qty} </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
