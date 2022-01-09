const compression = require("compression");
const express = require("express");
const config = require("./config");
const app = express();

app.use(compression());
app.use(express.static(config.staticDir));

module.exports = app;
