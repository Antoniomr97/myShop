const { find, newProductModel } = require("../mocks/productMethodMongoDB");
const productsDB = require("../initialData/productsDB");
const productModel = require("../models/Product");
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
      const newProduct = productModel({
        image: product.image,
        name: product.name,
        category: product.category,
        price: product.price,
        score: product.score,
      });
      await newProduct.save();
    });
    console.log("All Update");
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getProducts, loadData };
