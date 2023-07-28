const Product = require("../../models/products");

const listProductsService = async () => {
  const products = await Product.findAll();
  return products;
};

module.exports = listProductsService;
