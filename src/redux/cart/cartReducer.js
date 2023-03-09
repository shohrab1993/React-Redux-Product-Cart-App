import {
  ADDTOCART,
  CARTDECREMENT,
  CARTDELETE,
  CARTINCRIMENT,
} from "./actionType";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  const { cart, totalPrice, qty } = state;
  switch (action.type) {
    case ADDTOCART:
      const { product } = action.payload;

      const check = cart?.find((cartItem) => cartItem.id === product.id);
      if (check) {
        return state;
      } else {
        product["qty"] = 1;
        let upeatedQty = qty + 1;
        let updatedPrice =
          Math.round((totalPrice * 1 + product.price * 1) * 100) / 100;
        return {
          ...state,
          cart: [...cart, product],
          qty: upeatedQty,
          totalPrice: updatedPrice,
        };
      }
    case CARTINCRIMENT:
      let cartItem = action.payload;
      cartItem.qty = cartItem.qty + 1;
      let upeatedQty = qty + 1;
      let updatedPrice =
        Math.round((totalPrice * 1 + cartItem.price * 1) * 100) / 100;
      return {
        ...state,
        cart: [...cart],
        qty: upeatedQty,
        totalPrice: updatedPrice,
      };
    case CARTDECREMENT:
      let item = action.payload;
      if (item.qty > 1) {
        item.qty = item.qty - 1;
        let upeatedQty = qty - 1;
        let updatedPrice =
          Math.round((totalPrice * 1 - item.price * 1) * 100) / 100;
        return {
          ...state,
          cart: [...cart],
          qty: upeatedQty,
          totalPrice: updatedPrice,
        };
      }
      return state;

    case CARTDELETE:
      let cartId = action.payload;
      const filterd = cart.filter((cartItem) => cartItem.id !== cartId.id);
      let upeateQty = qty - cartId.qty;
      let updatePrice =
        Math.round((totalPrice * 1 - cartId.price * cartId.qty * 1) * 100) /
        100;
      return {
        ...state,
        cart: [...filterd],
        qty: upeateQty,
        totalPrice: updatePrice,
      };

    default:
      return state;
  }
};
export default reducer;
