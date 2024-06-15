const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    minLength: 6,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Incorrect email"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minLength: 8,
  },
  role: {
    type: String,
    required: [true, "The role is required"],
    enum: ["user", "admin"],
    default: "user",
  },
});

const User = mongoose.model("Users", userSchema, "Users");

module.exports = User;
