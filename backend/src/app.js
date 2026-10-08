const express = require("express");
const app = express();

const responsaveisRoute = require("./routes/responsaveisRoute");

app.use(express.json());
app.use(responsaveisRoute);

module.exports = app;