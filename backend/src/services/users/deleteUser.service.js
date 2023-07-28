const User = require("../../models/user");

const deleteUserService = async (id) => {
  const user = await User.findOne({ where: { id: id } });
  await user.destroy();
};

module.exports = deleteUserService;
