import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/action";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { name, category, image, price, stock } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={image} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{name}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{stock}</span>
            </p>
          </div>
          <button className="lws-btnAddToCart" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
