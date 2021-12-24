const config = require("./config");
const app = require("./app");

app.listen(config.port, () => {
  console.log(`Server is listening at http://127.0.0.1:${config.port}`);
});
