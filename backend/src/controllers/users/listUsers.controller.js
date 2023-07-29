const listUsersService = require("../../services/users/listUsers.service");

const listUsersController = async (req, res) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};

module.exports = listUsersController;
