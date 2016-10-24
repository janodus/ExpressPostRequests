//SETUP 
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// UNIVERSAL FRIEND LIST (JUST AN EXAMPLES, PLACED IN GLOBAL SCOPE):
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

// ====== ROUTES 
app.get("/", function(req,res){
  res.render("home");
});

app.get("/friends", function(req,res){
  res.render("friends", {friends: friends});
});

app.post("/addfriend", function(req,res){
  var newFriend = req.body.newFriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

// ====== SERVER
app.listen(process.env.PORT, process.env.IP, function(){console.log("SERVER IS RUNNING")});