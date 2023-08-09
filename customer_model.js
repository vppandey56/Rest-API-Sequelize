module.exports = (sequelize, Sequelize) => {
  const customers = sequelize.define("customer", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    salary: {
      type: Sequelize.INTEGER,
    },
  });
  return customers;
};
