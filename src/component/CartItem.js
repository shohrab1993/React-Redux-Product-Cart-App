import React from "react";
import { useDispatch } from "react-redux";
import { cartDecrement, cartDelete, cartIncrement } from "../redux/cart/action";

const CartItem = ({ cart }) => {
  const { name, category, image, price, stock, qty } = cart;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(cartIncrement(cart));
  };
  const handleDecrement = () => {
    dispatch(cartDecrement(cart));
  };

  const handleDelte = () => {
    dispatch(cartDelete(cart));
  };
  return (
    <>
      <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">
          {/* <!-- cart image --> */}
          <img className="lws-cartImage" src={image} alt="product" />
          {/* <!-- cart item info --> */}
          <div className="space-y-2">
            <h4 className="lws-cartName">{name}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>
              BDT <span className="lws-cartPrice">price</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
          {/* <!-- amount buttons --> */}
          <div className="flex items-center space-x-4">
            <button
              className="lws-incrementQuantity"
              disabled={stock < qty + 1 ? true : null}
              onClick={handleIncrement}
            >
              <i className="text-lg fa-solid fa-plus"></i>
            </button>
            <span className="lws-cartQuantity">{qty}</span>
            <button className="lws-decrementQuantity" onClick={handleDecrement}>
              <i className="text-lg fa-solid fa-minus"></i>
            </button>
          </div>
          {/* <!-- price --> */}
          <p className="text-lg font-bold">
            BDT <span className="lws-calculatedPrice">{price * qty}</span>
          </p>
        </div>
        {/* <!-- delete button --> */}
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart" onClick={handleDelte}>
            <i className="text-lg text-red-400 fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
