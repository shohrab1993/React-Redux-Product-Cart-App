import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const CartPage = () => {
  const cartItem = useSelector((state) => state.cart);

  return (
    <>
      <main className="py-16">
        <div className="container 2xl:px-8 px-2 mx-auto">
          <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
          <div className="cartListContainer">
            <div className="space-y-6">
              {cartItem.cart.map((cart) => {
                return <CartItem key={cart.id} cart={cart} />;
              })}
            </div>

            <BillDetails cartItem={cartItem} />
          </div>
        </div>
      </main>
    </>
  );
};

export default CartPage;
