const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const productsRoutes = require("./routes/products.routes");
const loginRoutes = require("./routes/login.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.use("", userRoutes);
app.use("", productsRoutes);
app.use("", loginRoutes);

module.exports = app;
