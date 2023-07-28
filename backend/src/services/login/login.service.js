const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const { compare } = require("bcryptjs");
require("dotenv").config();

const loginService = async (data) => {
  const user = await User.findOne({
    where: { email: data.email },
  });

  if (!user) {
    return [404, { message: "User not found" }];
  }

  const comparePass = await compare(data.password, user.password);
  if (!comparePass) {
    return [403, { message: "Invalid email or password" }];
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user.id,
    expiresIn: "24h",
  });

  return [200, { token: token, id: user.id }];
};

module.exports = loginService;
