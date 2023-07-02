const express = require("express");
const cors = require("cors");
const scoreRouter = require("./routes/api/scoreRouts");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const pool = require("./db");
app.use(cors());
app.use(express.json());
app.use("/api/score", scoreRouter);

app.listen(PORT, () => console.log(`Server run on port:${PORT}`));
