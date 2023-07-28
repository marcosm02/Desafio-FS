const userRoutes = require("express").Router();

const createUserController = require("../controllers/users/createUser.controller");
const listUsersController = require("../controllers/users/listUsers.controller");
const getOneUserController = require("../controllers/users/getOneUser.controller");
const updateUserController = require("../controllers/users/updateUser.controller");
const deleteUserController = require("../controllers/users/deleteUser.controller");

const {
  userSchema,
  updateUserSchema,
} = require("../serializers/users.serializer");

const authMiddleware = require("../middlewares/auth.middleware");
const validateDataMiddleware = require("../middlewares/validateData.middleware");
const isOwnerMiddleware = require("../middlewares/isOwner.middleware");
const verifyIdExistsMiddleware = require("../middlewares/verifyIdExists.middleware");
const validateIdMiddleware = require("../middlewares/validateId.middleware");

userRoutes.post(
  "/users",
  validateDataMiddleware(userSchema),
  createUserController
);

userRoutes.get("/users", authMiddleware, listUsersController);

userRoutes.get(
  "/users/:id",
  authMiddleware,
  validateIdMiddleware,
  verifyIdExistsMiddleware,
  isOwnerMiddleware,
  getOneUserController
);

userRoutes.patch(
  "/users/:id",
  authMiddleware,
  validateIdMiddleware,
  verifyIdExistsMiddleware,
  isOwnerMiddleware,
  validateDataMiddleware(updateUserSchema),
  updateUserController
);

userRoutes.delete(
  "/users/:id",
  authMiddleware,
  validateIdMiddleware,
  verifyIdExistsMiddleware,
  isOwnerMiddleware,
  deleteUserController
);

module.exports = userRoutes;
