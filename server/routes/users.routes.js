const UserRouter = require("express").Router();
const {
  createUser,
  getContacts,
  getAllUser,
} = require("../controllers/users.controller");

UserRouter.post("/", createUser);
UserRouter.get("/getall", getAllUser);
UserRouter.get("/getcontacts", getContacts);

module.exports = UserRouter;
