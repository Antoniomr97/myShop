const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productsRouter = require("./routes/productRoutes");
const usersRouter = require("./routes/userRoutes");
const CartRouter = require("./routes/cartRoutes");
const BillRouter = require("./routes/billRoutes");
require("dotenv").config();

const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/cart", CartRouter);
app.use("/bill", BillRouter);

app.listen(port, () => {
  console.log(`Port ${port} running`);
});

const url_mongo =
  "mongodb+srv://antoniomartinezruiz1997:gLTKUksnvFqHnOEz@cluster0.i2wthx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url_mongo);

const db = mongoose.connection;

db.on("error", (error) => {
  console.log(`Error al conectar con mongo ${error}`);
});

db.on("connected", () => {
  console.log(`Success connect`);
});
