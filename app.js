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
app.get("/home", (req, res) => {
  res.render("home.ejs");
});

// about page route
app.get("/about", (req, res) => {
  res.render("about.ejs")
})
// contact page route
app.get("/contact", (req, res) => {
  res.render("contact.ejs")
})

// blog page route
app.get("/blog", (req, res) => {
  res.render("blog.ejs")
})

// contact page route
app.get("/portfolio", (req, res) => {
  res.render("portfolio.ejs")
})

// live server on port 3000
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
