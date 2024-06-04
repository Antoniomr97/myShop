import { find, newProductModel } from "../mocks/productMethodMongoDB";
import productsDB from "../initialData/productsDB";

const getProducts = (req, res) => {
  try {
    const allProducts = find();
    res.status(200).json({
      products: allProducts,
    });
  } catch (error) {
    res.status(500);
  }
};

const loadData = async (req, res) => {
  try {
    productsDB.map(async (product) => {
      const newProduct = newProductModel({
        image: product.image,
        name: product.name,
        category: product.category,
        price: product.price,
        score: product.score,
      });
      await newProduct.save();
    });
    res.sendStatus(200);
  } catch (error) {
    res.status(500);
  }
};

module.exports = { getProducts, loadData };
