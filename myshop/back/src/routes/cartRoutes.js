const {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
  deleteProductsByUserId,
} = require("../controllers/cartController");

const CartRouter = require("express").Router();

CartRouter.get("/", getCartProducts);
CartRouter.post("/", addCartProduct);
CartRouter.delete("/:id", deleteCartProduct);
CartRouter.delete("/:userId", deleteProductsByUserId);

module.exports = CartRouter;
