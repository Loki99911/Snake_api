const { HttpError, ctrlWrapper } = require("../helpers");
// const { Product } = require("../models/score");
const db = require("../db")

const listScores = async (req, res) => {
  const answer = await Product.find({}, "-__v", { skip, limit });
  res.json(answer);
};

const addScore = async (req, res) => {
  db
  const {name, score} = req.body
  const answer = await db.query(INSERT INTO );
  res.status(201).json(answer);
};

module.exports = {
  listScores: ctrlWrapper(listScores),
  addScore: ctrlWrapper(addScore),
};
