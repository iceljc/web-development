var express = require("express");
var app = express();


app.get("/", function(req, res){
   res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!"
    };
    var sound = sounds[animal];
    res.send("The " + animal + " says " + "'" + sound + "'");
});

app.get("/repeat/:word/:num", function(req, res){
    var obj = req.params;
    var word = obj.word;
    var num = Number(obj.num);
    var result = "";
    for (var i = 0; i < num; i++) {
        result += word + " ";
    }
    res.send(result);
});

app.get("*", function(req, res){
   res.send("Sorry, page not found...What are you doing with your life?"); 
});

// start server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});


