const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("Hello-world-english");
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000...");
});