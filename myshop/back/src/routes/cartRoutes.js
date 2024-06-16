const {
  getCartProducts,
  addCartProduct,
  deleteCartProduct,
} = require("../controllers/cartController");

const CartRouter = require("express").Router();

CartRouter.get("/", getCartProducts);
CartRouter.post("/", addCartProduct);
CartRouter.delete("/:id", deleteCartProduct);

module.exports = CartRouter;
