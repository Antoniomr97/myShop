const { getProducts, loadData } = require("../controllers/productsController");

const productsRouter = require("express").Router();

productsRouter.get("/", getProducts);
productsRouter.get("/loadData", loadData);

module.exports = productsRouter;
