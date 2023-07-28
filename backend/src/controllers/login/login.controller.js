const loginService = require("../../services/login/login.service");

const loginController = async (req, res) => {
  const login = req.body;
  const [status, respLogin] = await loginService(login);
  return res.status(status).json(respLogin);
};

module.exports = loginController;
