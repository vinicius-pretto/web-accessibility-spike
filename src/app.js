const express = require("express");
const config = require("./config");
const app = express();

app.use(express.static(config.staticDir));

module.exports = app;
