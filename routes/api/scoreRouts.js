const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/scoreContr");

router.post("/", ctrl.addScore);
router.get("/", ctrl.listScores);

module.exports = router;
