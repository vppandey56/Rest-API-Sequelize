const Sequelize = require("sequelize");
const dbName = "customer";
const dbUser = "root";
const dbPassword = "Vedprakash0@";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: "localhost",
  dialect: "mysql",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// models tables
db.customers = require("./customer_model")(sequelize, Sequelize);

module.exports = db;
