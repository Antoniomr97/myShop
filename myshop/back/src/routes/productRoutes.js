import { getProducts, loadData } from "../controllers/productsController";

const ProductsRouter = require("express").Router();

ProductsRouter.get("/", getProducts);
ProductsRouter.get("/loadData", loadData);

module.exports = ProductsRouter;
