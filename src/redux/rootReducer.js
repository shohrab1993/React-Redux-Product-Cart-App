import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productreducer from "./product/productReducer";

const rootReducer = combineReducers({
  product: productreducer,
  cart: cartReducer,
});
export default rootReducer;
