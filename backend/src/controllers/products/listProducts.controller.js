const listProductsService = require("../../services/products/listProducts.service");

const listProductsController = async (req, res) => {
  const products = await listProductsService();
  return res.status(200).json(products);
};

module.exports = listProductsController;
