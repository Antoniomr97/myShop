const { addBill } = require("../controllers/billController");

const BillRouter = require("express").Router();

BillRouter.post("/", addBill);

module.exports = BillRouter;
