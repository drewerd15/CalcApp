//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Calculators = require("./models/Calculators");

//associations could go here!
User.hasMany(Calculators);
Calculators.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Calculators,
  },
};
