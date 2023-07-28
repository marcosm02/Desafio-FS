const createUserService = require("../../services/users/createUser.service");

const createUserController = async (req, res) => {
  const userData = req.body;
  const newUser = await createUserService(userData);
  return res.status(201).json(newUser);
};

module.exports = createUserController;
