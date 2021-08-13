const router = require("express").Router();
const { requireToken, isAdministrator } = require("./utils");
const {
  models: { Calculators },
} = require("../db");
module.exports = router;
// /api/calculators/
router.get("/", requireToken, async (req, res, next) => {
  try {
    console.log("req.user");
    const calculators = await Calculators.findByPk(req.user.id);
    console.log(`calculators`, calculators);
    res.json(calculators);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const calculator = await Calculators.findById(req.users.id);
    res.json(calculator);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const createCalculator = await calculators.create(req.body);
    res.json(calculator);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const deleteCalculator = await calculators.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleteCalculator);
  } catch (err) {
    next(err);
  }
});
