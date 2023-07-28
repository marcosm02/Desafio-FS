const productsRoutes = require("express").Router();

const listProductsController = require("../controllers/products/listProducts.controller");
const createProductController = require("../controllers/products/createProduct.controller");

productsRoutes.get("/products", listProductsController);

productsRoutes.post("/products", createProductController);

module.exports = productsRoutes;
