const deleteUserService = require("../../services/users/deleteUser.service");

const deleteUserController = async (req, res) => {
  const id = req.params.id;
  await deleteUserService(id);
  return res.status(204).json({});
};

module.exports = deleteUserController;
