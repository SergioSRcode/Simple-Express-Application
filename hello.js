const express = require("express");
const morgan = require("morgan");
const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

// const writeLog = (req, res) => {
//   let timeStamp = String(new Date()).slice(4, 24); // Mmm dd YYYY HH:MM:SS
//   console.log(`${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`);
// };

app.get("/", (req, res) => {
  res.redirect("/english");
  // writeLog(req, res);
});

app.get("/english", (req, res) => {
  res.render("hello-world-english");
  // writeLog(req, res);
});

app.get("/french", (req, res) => {
  res.render("hello-world-french");
  // writeLog(req, res);
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
  // writeLog(req, res);
});

app.get("/german", (req, res) => {
  res.render("hello-world-german");
  // writeLog(req, res);
});

app.listen(3000, "localhost", () => {
  console.log("Listening to port 3000...");
});