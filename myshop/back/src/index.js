const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
import ProductsRouter from "./routes/productRoutes";
const app = express();
const port = 9000;

app.use(express.json());
app.use(cors());

app.use("/products", ProductsRouter);

app.listen(port, () => {
  console.log(`Port ${port} running`);
});

// const url_mongo =
//   "mongodb+srv://antoniomartinezruiz1997:<password>@cluster0.i2wthx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(url_mongo);

// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.log(`Error al conectar con mongo ${error}`);
// });

// db.on("connected", () => {
//   console.log(`Success connect`);
// });
