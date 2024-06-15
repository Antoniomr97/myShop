const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const emailService = require("../services/emailService");

const signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const newUser = new userModel({
      email: email,
      password: await bcrypt.hash(password, 10),
      role: role,
    });

    await newUser.save();

    await emailService.sendEmail(
      newUser.email,
      "Thanks for subscribing",
      "<h1>Hello,<h1> <h3>Thank you for joining our page. We are excited to have you with us.<br>If you have any questions or need help, do not hesitate to contact us.<br>Greetings,<br> The team of myShop<h3>"
    );

    res.status(201).json({
      status: "Success",
      message: "Successfully created user",
      error: newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        status: "Failed",
        message: "The email already exists",
        error: error.message,
      });
    }
    res.status(400).json({
      status: "Error",
      message: "Could not create user",
      error: error.message,
    });
  }
};

module.exports = { signup };
