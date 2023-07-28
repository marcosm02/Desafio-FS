const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  let auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: "Missing token" });
  }
  const token = auth.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.user = {
      id: decoded.sub,
    };
  });
  return next();
};

module.exports = authMiddleware;
