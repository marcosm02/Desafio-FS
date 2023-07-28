const User = require("../models/user");

const verifyIdExistsMiddleware = async (req, res, next) => {
  const urlId = req.params.id;
  const user = await User.findByPk(urlId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return next();
};

module.exports = verifyIdExistsMiddleware;
