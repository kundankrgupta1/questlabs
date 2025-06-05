const express = require("express");
const userRouter = require("../routes/user.routes");
const app = express()
const cors = require("cors");
app.use(express.json())
app.use(cors());
app.use("/user", userRouter);
module.exports = app;
