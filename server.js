const express = require("express");
const cors = require("cors");
const scoreRouter = require("./routes/api/scoreRouts");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
const pool = require("./db");
// async function getAllContacts() {
//   try {
//     const client = await pool.connect();
//       const result = await client.query("SELECT * FROM score");
//       console.log(result.rows);
//     const contacts = result.rows;
//     client.release();
//     return contacts;
//   } catch (error) {
//     console.error("Error retrieving data:", error);
//     throw error;
//   }
// }
app.use(cors());
app.use(express.json());
// console.log(getAllContacts());
app.use("/api/score", scoreRouter);

app.listen(PORT, () => console.log(`Server run on port:${PORT}`));
