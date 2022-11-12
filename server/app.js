require("dotenv").config();
const express = require("express");
const { mongoose_connection } = require("./config/db.config");

const app = express();

// third party middlewares

const morgan = require("morgan");
const helmet = require("helmet");

app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());

// routes
const UserRouter = require("./routes/users.routes");

// adding rout blueprints
app.use("/user", UserRouter);

module.exports = app;
