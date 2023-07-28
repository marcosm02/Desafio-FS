const getOneUserService = require("../../services/users/getOneUser.service");

const getOneUserController = async (req, res) => {
  const id = req.params.id;
  const user = await getOneUserService(id);
  return res.status(200).json(user);
};

module.exports = getOneUserController;
