const yup = require("yup");

const productsSchema = yup.object().shape({
  name: yup.string().required(),
  price: yup.number().required(),
  description: yup.string().required(),
});

module.exports = productsSchema;
