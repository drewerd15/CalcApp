const Sequelize = require("sequelize");
const db = require("../db");

const Calculators = db.define("Calculators", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  schema: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  uischema: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Calculators;
