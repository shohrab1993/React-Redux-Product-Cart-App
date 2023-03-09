import { ADDED } from "./actionType";
import initialState from "./initialState";

const productId = (product) => {
  const id = product.reduce((iniId, newId) => Math.max(newId.id, iniId), -1);
  return id + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      const { proName, category, image, price, stock } = action.payload;
      return [
        ...state,
        {
          id: productId(state),
          name: proName,
          category: category,
          image: image,
          price: price,
          stock: stock,
        },
      ];

    default:
      return state;
  }
};
export default reducer;
