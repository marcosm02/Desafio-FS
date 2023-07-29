const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

async function connection() {
  try {
    await sequelize.authenticate();
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
}

connection();

module.exports = sequelize;
