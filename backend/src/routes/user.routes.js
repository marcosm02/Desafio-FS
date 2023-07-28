const userRoutes = require("express").Router();

const createUserController = require("../controllers/users/createUser.controller");
const listUsersController = require("../controllers/users/listUsers.controller");
const getOneUserController = require("../controllers/users/getOneUser.controller");
const updateUserController = require("../controllers/users/updateUser.controller");
const deleteUserController = require("../controllers/users/deleteUser.controller");

userRoutes.get("/users/", createUserController);

userRoutes.post("/users/", listUsersController);

userRoutes.get("/users/:id", getOneUserController);

userRoutes.patch("/users/:id", updateUserController);

userRoutes.delete("/users/:id", deleteUserController);

module.exports = userRoutes;
