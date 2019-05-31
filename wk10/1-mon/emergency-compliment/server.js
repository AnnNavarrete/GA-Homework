//pseudocode
// created a new folder for the homework
// head to terminal and install appropriate extensions
// setup the shell of the files as starting point

const express = require("express");
const app = express();
const logger = require("./logger");
const _ = require("underscore");

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(logger);

// creating a function to choose random color

const randomColor = () =>
  _.sample(["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]);

// creating a function to choose random compliments
const randomCompliment = () =>
  _.sample([
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
  ]);

// index page
app.get("/", (req, res) => {
  res.render("home", { compliment: randomCompliment(), color: randomColor() });
});

// setting up where name is provided
app.get("/:name", (req, res) => {
  res.render("home", {
    compliment: randomCompliment(),
    color: randomColor(),
    name: req.params.name
  });
});

app.listen(8080, () => {
  console.log("listening on 8080");
});
