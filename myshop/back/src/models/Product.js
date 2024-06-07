const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const product = mongoose.model("Product", productSchema, "Product");

module.exports = product;
