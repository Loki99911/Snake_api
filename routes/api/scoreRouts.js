const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/scoreContr");
const {
  validateBody
} = require("../../middlewars");
const { schemaJoi } = require("../../models/score");

router.get("/", ctrl.listScores);

router.post("/", validateBody(schemaJoi), ctrl.addScore);

module.exports = router;
