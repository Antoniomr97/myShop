const {
  getProducts,
  loadData,
  getProductsByName,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const productsRouter = require("express").Router();

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getProductsByName);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);
// productsRouter.get("/loadData", loadData);

module.exports = productsRouter;
