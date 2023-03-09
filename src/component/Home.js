import React from "react";
import Product from "./Product";
import ProductInput from "./ProductInput";

const Main = () => {
  return (
    <>
      <main className="py-16">
        <div className="productWrapper">
          <Product />
          <div>
            <ProductInput />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
