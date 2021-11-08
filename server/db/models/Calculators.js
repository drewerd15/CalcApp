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
  design: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Calculators;
