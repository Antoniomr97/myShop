const usersRouter = require("express").Router();
const { signup } = require("../controllers/userController");

usersRouter.post("/signup", signup);

module.exports = usersRouter;
