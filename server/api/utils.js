const {
  models: { User },
} = require("../db");

const requireToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const user = await User.findByToken(token);
    req.user = user;
    // console.log(req.user);
    next();
  } catch (e) {
    next(e);
  }
};

const isAdministrator = (req, res, next) => {
  if (req.user.role !== "ADMINISTRATOR") {
    return res.status(403).send("Unauthorized access attempt has been logged.");
  } else {
    next();
  }
};

module.exports = {
  requireToken,
  isAdministrator,
};
