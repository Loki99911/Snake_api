const { ctrlWrapper } = require("../helpers");
const db = require("../db");

const addScore = async (req, res) => {
  const { name, value } = req.body;
  const answer = await db.query(
    "INSERT INTO score(name, value) values ($1,$2) RETURNING *",
    [name, value]
  );
  res.status(201).json(answer.rows[0]);
};

const listScores = async (_, res) => {
  const answer = await db.query("select * from score");
  res.json(answer.rows);
};

module.exports = {
  listScores: ctrlWrapper(listScores),
  addScore: ctrlWrapper(addScore),
};