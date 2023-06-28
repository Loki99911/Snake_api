const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();


app.listen(PORT, () => console.log(`Server run on port:${PORT}`));

// https://www.youtube.com/watch?v=p3RFMEixUOE