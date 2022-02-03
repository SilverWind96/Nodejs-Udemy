const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "anhtrong", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
