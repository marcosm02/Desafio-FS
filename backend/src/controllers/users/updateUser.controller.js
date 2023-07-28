const updateUserService = require("../../services/users/updateUser.service");

const updateUserController = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const updatedUser = await updateUserService(id, data);
  return res.status(200).json(updatedUser);
};

module.exports = updateUserController;
