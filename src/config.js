const path = require("path");

const config = {
  port: process.env.PORT || 3000,
  staticDir: path.resolve("public"),
};

module.exports = config;
