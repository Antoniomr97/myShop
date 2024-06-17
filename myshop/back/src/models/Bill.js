const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  billDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Bill = mongoose.model("Bills", billSchema, "Bills");

module.exports = Bill;
