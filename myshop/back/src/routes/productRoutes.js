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
productsRouter.post("/", createProduct);
// productsRouter.get("/loadData", loadData);
productsRouter.get("/:_id", getProductsById);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

module.exports = productsRouter;
