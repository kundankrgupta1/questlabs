const express = require("express");
const { createUser, getUsers } = require("../controllers/user.controller");
const userRouter = express.Router();
userRouter.post("/create", createUser);
userRouter.get("/all", getUsers);
module.exports = userRouter;