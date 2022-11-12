const UserRouter = require("express").Router();
const { createUser } = require("../controllers/users.controller");

UserRouter.post("/", createUser);

module.exports = UserRouter;
