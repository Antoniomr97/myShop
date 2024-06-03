import { productsDB } from "./productsDB";

const find = (id) => {
  const product = productsDB.find((p) => p.id == id);
  return product;
};

const newProductModel = (name, price, category) => {};
