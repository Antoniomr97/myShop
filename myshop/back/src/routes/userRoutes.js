const usersRouter = require("express").Router();
const {
  signup,
  login,
  changePassword,
} = require("../controllers/userController");

usersRouter.post("/signup", signup);
usersRouter.post("/login", login);
usersRouter.put("/:id", changePassword);

module.exports = usersRouter;
