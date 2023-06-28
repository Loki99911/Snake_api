const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/scoreContr");
const {
  validateBody
} = require("../../middlewars");
const { schemaJoi } = require("../../models/score");

router.post("/", ctrl.addScore);
router.get("/", ctrl.listScores);

module.exports = router;
