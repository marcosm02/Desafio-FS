const User = require("../../models/user");

const getOneUserService = async (id) => {
  const user = await User.findOne({
    where: { id: id },
    attributes: { exclude: ["password"] },
  });
  return user;
};

module.exports = getOneUserService;
