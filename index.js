const ejsMate = require('ejs-mate')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, "public")));

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/bio", (req, res) => {
  res.render("bio");
});

app.get("/experience", (req, res) => {
  res.render("experience");
});

app.get("/portfolio", (req, res) => {
  res.render("port");
});

app.get("*", (req, res) => {
  res.render("error");
});

app.listen(3000, () => {
  console.log("Serving on port 3000!");
});


