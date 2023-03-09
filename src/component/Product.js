import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";

const Product = () => {
  const prodItem = useSelector((state) => state.product);

  return (
    <>
      <div className="productContainer" id="lws-productContainer">
        {prodItem.length === 0 && (
          <p>currently you have no product | you can add product</p>
        )}

        {prodItem.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Product;
