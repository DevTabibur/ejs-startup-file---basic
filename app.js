//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// for send data on server using bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// for using EJS
app.set("view engine", "ejs");

// for public folder
app.use(express.static("public"));

// for home directory and list.ejs file it's rendering
app.get("/", (req, res) => {
  res.render("home");
});

// for menu directory and menu.ejs file rendering
// app.get("/", (req, res) => {
//     res.render("menu.ejs")
// })

// live server on port 3000
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
