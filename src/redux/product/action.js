import { ADDED } from "./actionType";

export const added = (proName, category, image, price, stock) => {
  return {
    type: ADDED,
    payload: {
      proName,
      category,
      image,
      price,
      stock,
    },
  };
};
