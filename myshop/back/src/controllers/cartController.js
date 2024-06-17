const cartModel = require("../models/Cart");

//GET ALL PRODUCTS
const getCartProducts = async (req, res) => {
  try {
    const allProducts = await cartModel.find();
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
const addCartProduct = async (req, res) => {
  try {
    const cartProductData = req.body;
    const newCartProduct = await cartModel.create({
      userId: cartProductData.userId,
      productId: cartProductData.id,
      productImage: cartProductData.image,
      productPrice: cartProductData.price,
    });
    res.status(200).json({
      status: "succeeded",
      data: newCartProduct,
      error: null,
    });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};

//DELETE A PRODUCT
const deleteCartProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await cartModel.findByIdAndDelete(id);

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

//DELETE AL PRODUCT WITH THE SAME USERID
const deleteProductsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const deleteResult = await cartModel.deleteMany({ userId: userId });

    if (deleteResult.deletedCount > 0) {
      res.status(200).json({
        status: "succeeded",
        data: deleteResult,
        message: `Deleted all products for userId ${userId}`,
        error: null,
      });
    } else {
      res.status(404).json({
        status: "failed",
        data: null,
        error: `No products found for userId ${userId}`,
      });
    }
  } catch (error) {
    console.error("Error deleting products:", error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: "Internal server error" });
  }
};
module.exports = {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
  deleteProductsByUserId,
};
