import {
  ADDTOCART,
  CARTDECREMENT,
  CARTDELETE,
  CARTINCRIMENT,
} from "./actionType";

export const addToCart = (product, productId) => {
  return {
    type: ADDTOCART,
    payload: {
      product,
      productId,
    },
  };
};
export const cartIncrement = (cartItem) => {
  return {
    type: CARTINCRIMENT,
    payload: cartItem,
  };
};
export const cartDecrement = (item) => {
  return {
    type: CARTDECREMENT,
    payload: item,
  };
};
export const cartDelete = (cartId) => {
  return {
    type: CARTDELETE,
    payload: cartId,
  };
};
