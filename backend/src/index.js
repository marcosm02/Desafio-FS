const app = require("./app");
const sequelize = require("./sequelize");

const port = process.env.DB_PORT;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
