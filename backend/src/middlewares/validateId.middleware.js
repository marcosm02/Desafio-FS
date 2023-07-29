const { validate } = require("uuid");

const validateIdMiddleware = async (req, res, next) => {
  const id = req.params.id;
  if (!validate(id)) {
    return res.status(400).json({ message: "invalid id" });
  }
  return next();
};

module.exports = validateIdMiddleware;
