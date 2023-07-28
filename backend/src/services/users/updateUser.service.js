const User = require("../../models/user");
const bcrypt = require("bcryptjs");

const updateUserService = async (id, data) => {
  const user = await User.findOne({ where: { id: id } });
  const { name, email, password } = data;

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) {
    const newPassword = await bcrypt.hash(password, 10);
    user.password = newPassword;
  }

  await user.save();

  const userReturned = user.toJSON();
  delete userReturned.password;
  return userReturned;
};

module.exports = updateUserService;
