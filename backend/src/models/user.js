const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        const hashedPass = await bcrypt.hash(user.password, 10);
        user.password = hashedPass;
      },
    },
  }
);

module.exports = User;
