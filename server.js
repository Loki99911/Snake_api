const express = require("express");
const cors = require("cors");
const scoreRouter = require("./routes/api/scoreRouts");
const PORT = process.env.PORT || 8080;
const app = express();

// app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/score", scoreRouter);

app.listen(PORT, () => console.log(`Server run on port:${PORT}`));
