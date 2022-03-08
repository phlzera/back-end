const express = require("express");
const app = express();
const routes = require("./routes");

require("./models");

app.use(express.json());
app.use(routes);
app.listen(3040, () => console.log("Back-End rodando na porta 3040"));
