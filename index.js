const express = require("express");

const server = express();

server.listen(4000);

server.get("/", (req, res) => {
  console.log("teste");
});
