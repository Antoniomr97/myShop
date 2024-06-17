const userModel = require("../models/User");
const bcrypt = require("bcrypt");
const emailService = require("../services/emailService");
const jwt = require("jsonwebtoken");
const { generateToken } = require("../utils/utils");

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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Email:", email);
    console.log("Password:", password);

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email and password do not match" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    console.log("Valid Password:", validPassword);

    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Email and password do not match" });
    }

    // Mostrar el _id del usuario en la consola
    console.log("User ID:", user._id);

    const payload = {
      userId: user._id,
      email: user.email,
    };

    const token = generateToken(payload, false);
    const token_refresh = generateToken(payload, true);

    return res.status(200).json({
      status: "succeeded",
      data: { userId: user._id },
      token: token,
      token_refresh: token_refresh,
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({
      status: "Error",
      message: "Could not login",
      error: error.message,
    });
  }
};

const changePassword = async (req, res) => {
  try {
    const id = req.params.id;
    const { password } = req.body;

    if (!password) {
      return res
        .status(400)
        .json({ status: "failed", error: "Password is required" });
    }

    const user = await userModel.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ status: "failed", error: "User not found" });
    }

    // Encriptar la nueva contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Actualizar la contraseña del usuario
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ status: "succeeded", data: user, error: null });
  } catch (error) {
    console.error("Error updating password:", error);
    res
      .status(500)
      .json({ status: "failed", data: null, error: error.message });
  }
};
module.exports = { signup, login, changePassword };
