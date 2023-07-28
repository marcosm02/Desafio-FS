const loginController = require("../controllers/login/login.controller");

const loginRoutes = require("express").Router();

loginRoutes.post("/login", loginController);

module.exports = loginRoutes;
