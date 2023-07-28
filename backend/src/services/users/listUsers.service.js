const User = require("../../models/user");

const listUsersService = async () => {
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
  });
  return users;
};

module.exports = listUsersService;
