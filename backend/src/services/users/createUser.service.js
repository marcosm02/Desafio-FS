const User = require("../../models/user");

const createUserService = async (data) => {
  const user = await User.create(data);
  const userReturned = user.toJSON();
  delete userReturned.password;
  return userReturned;
};

module.exports = createUserService;
