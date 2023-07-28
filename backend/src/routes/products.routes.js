const productsRoutes = require("express").Router();

const listProductsController = require("../controllers/products/listProducts.controller");
const createProductController = require("../controllers/products/createProduct.controller");

const productsSchema = require("../serializers/products.serializer");

const authMiddleware = require("../middlewares/auth.middleware");
const validateDataMiddleware = require("../middlewares/validateData.middleware");

productsRoutes.get("/products", authMiddleware, listProductsController);

productsRoutes.post(
  "/products",
  authMiddleware,
  validateDataMiddleware(productsSchema),
  createProductController
);

module.exports = productsRoutes;
