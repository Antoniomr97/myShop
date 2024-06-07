const { find, newProductModel } = require("../mocks/productMethodMongoDB");
const productsDB = require("../initialData/productsDB");
const productModel = require("../models/Product");

//GET ALL PRODUCTS
const getProducts = async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json({
      status: "succeeded",
      data: allProducts,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//CREATE NEW PRODUCT
const createProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await productModel({
      image: productData.image,
      name: productData.name,
      category: productData.category,
      price: productData.price,
      score: productData.score,
    });
    await newProduct.save();

    console.log(newProduct);
    res.status(200).json({
      status: "succeeded",
      data: productData,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//DELETE A PRODUCT
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await productModel.findByIdAndDelete(id);

    res.status(200).json({
      status: "succeeded",
      data: null,
      error: null,
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//UPDATE A PRODUCT
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Received ID:", id);
    const { image, name, category, price, score } = req.body;
    console.log("Received data:", { image, name, category, price, score });

    const productAux = await productModel.findById(id);
    console.log("Found product:", productAux);

    if (!productAux) {
      console.error("Product not found");
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "The product does not exist",
      });
    }

    if (image) productAux.image = image;
    if (name) productAux.name = name;
    if (category) productAux.category = category;
    if (price) productAux.price = price;
    if (score) productAux.score = score;

    await productAux.save();
    console.log("Updated product:", productAux);

    res
      .status(200)
      .json({ status: "succeeded", data: productAux, error: null });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};
//GET PRODUCT BY ID
const getProductsById = async (req, res) => {
  try {
    const id = req.params._id;

    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        status: "failed",
        data: null,
        error: "Product not found",
      });
    }
    res.status(200).json({
      status: "succeeded",
      data: product,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      data: null,
      error: error.message,
    });
  }
};

//LOAD ALL PRODUCTS TO DATABASE
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

module.exports = {
  getProducts,
  getProductsById,
  createProduct,
  deleteProduct,
  updateProduct,
  loadData,
};
