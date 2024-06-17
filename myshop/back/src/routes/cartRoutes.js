const {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
  deleteProductsByUserId,
} = require("../controllers/cartController");

const CartRouter = require("express").Router();

CartRouter.get("/", getCartProducts);
CartRouter.post("/", addCartProduct);
CartRouter.delete("/:userId", deleteProductsByUserId);
CartRouter.delete("/:id", deleteCartProduct);

module.exports = CartRouter;
