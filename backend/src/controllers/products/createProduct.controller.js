const createProductService = require("../../services/products/createProduct.service");

const createProductController = async (req, res) => {
  const productData = req.body;
  const newProduct = await createProductService(productData);
  return res.status(201).json(newProduct);
};

module.exports = createProductController;
