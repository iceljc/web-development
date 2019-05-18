// npm init
// npm install express --save
// npm install ejs --save
// npm install body-parser --save

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
   res.render("home"); 
});

app.post("/addfriend", function(req, res){
    var friendName = req.body.newfriend;
    var newFriend = friendName.charAt(0).toUpperCase() + friendName.slice(1);
    friends.push(newFriend);
    res.redirect("/friends");
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server has started !!!"); 
});