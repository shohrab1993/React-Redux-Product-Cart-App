import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { added } from "../redux/product/action";
import Input from "./Input";

const ProductInput = () => {
  const dispatch = useDispatch();
  const [Prodname, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(Prodname, category, image, price, quantity));
    setName("");
    setCategory("");
    setImage("");
    setPrice("");
    setQuantity("");
  };

  return (
    <>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          {/* <!-- product name --> */}

          <Input
            label="Product Name"
            htmlFor="lws-inputName"
            className="addProductInput"
            id="lws-inputName"
            type="text"
            required
            value={Prodname}
            onChange={(e) => setName(e.target.value)}
          />

          {/* <!-- product category --> */}
          <Input
            label="Category"
            htmlFor="lws-inputCategory"
            className="addProductInput"
            id="lws-inputCategory"
            type="text"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {/* <!-- product image url --> */}
          <Input
            label="Image Url"
            htmlFor="lws-inputImage"
            className="addProductInput"
            id="lws-inputImage"
            type="text"
            required
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          {/* <!-- price & quantity container --> */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* <!-- price --> */}
            <Input
              label="Price"
              htmlFor="ws-inputPrice"
              className="addProductInput"
              type="number"
              id="lws-inputPrice"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            {/* <!-- quantity --> */}
            <Input
              label="Quantity"
              htmlFor="lws-inputQuantity"
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          {/* <!-- submit button --> */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};

export default ProductInput;
