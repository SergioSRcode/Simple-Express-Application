const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!\n");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000...");
});