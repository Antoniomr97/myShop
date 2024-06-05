const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  image: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const product = mongoose.model("Product", productSchema, "Product");

module.exports = product;
