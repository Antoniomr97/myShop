const {
  getProducts,
  loadData,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const productsRouter = require("express").Router();

productsRouter.get("/", getProducts);
// productsRouter.get("/loadData", loadData);
productsRouter.get("/:_id", getProductsById);
productsRouter.post("/", createProduct);
productsRouter.put("/:_id", updateProduct);
productsRouter.delete("/:_id", deleteProduct);

module.exports = productsRouter;
