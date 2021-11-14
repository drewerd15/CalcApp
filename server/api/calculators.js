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
    //console.log(`calculators`, calculators);
    res.json(calculators);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const calculator = await Calculators.findByPk(req.params.id);
    res.json(calculator);
  } catch (err) {
    next(err);
  }
});

router.post("/:id", requireToken, async (req, res, next) => {
  try {
    const calculator = await req.user.getCalculators({
      where: { id: req.params.id },
    });
    calculator.design = req.params.design;
    await calculator.save;
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
