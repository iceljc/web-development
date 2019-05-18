var express = require("express");
var app = express();

// request & response: object
app.get("/", function(req, res){
    res.send("Hi there !");
});

app.get("/bye", function(req, res){
   res.send("Goodbye !"); 
});

app.get("/dog", function(req, res){
    res.send("Woof!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit.toUpperCase() + " page");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("Welcome the comments page");
});

// * matches everything
app.get("*", function(req, res){
    res.send("You are a Star.");
});

// start server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});