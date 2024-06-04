import productsDB from "../initialData/productsDB";

const find = (id) => {
  if (!id) {
    return productsDBuctsDB;
  } else {
    const product = productsDB.find((p) => p.id == id);
    return product;
  }
};

const newProductModel = (id, image, name, category, price, score) => {
  productsDB.push({
    id,
    image,
    name,
    category,
    price,
    score,
  });
};

module.exports = { find, newProductModel };
