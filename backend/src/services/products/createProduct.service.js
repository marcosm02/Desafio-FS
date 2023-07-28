const Product = require("../../models/products");

const createProductService = async (data) => {
  const product = await Product.create(data);
  return product;
};

module.exports = createProductService;
