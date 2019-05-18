{"filter":false,"title":"app.js","tooltip":"/YelpCamp/v6/app.js","undoManager":{"mark":23,"position":23,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":32},"action":"remove","lines":["var express = require(\"express\"),","    app = express(),","    mongoose = require(\"mongoose\"),","    bodyParser = require(\"body-parser\"),","    Campground = require(\"./models/campground\"),","    Comment = require(\"./models/comment\"),","    seedDB = require(\"./seeds\");"],"id":2},{"start":{"row":0,"column":0},"end":{"row":9,"column":36},"action":"insert","lines":["var express     = require(\"express\"),","    app         = express(),","    bodyParser  = require(\"body-parser\"),","    mongoose    = require(\"mongoose\"),","    passport    = require(\"passport\"),","    LocalStrategy = require(\"passport-local\"),","    Campground  = require(\"./models/campground\"),","    Comment     = require(\"./models/comment\"),","    User        = require(\"./models/user\"),","    seedDB      = require(\"./seeds\")"]}],[{"start":{"row":9,"column":36},"end":{"row":9,"column":37},"action":"insert","lines":[";"],"id":3}],[{"start":{"row":11,"column":49},"end":{"row":11,"column":50},"action":"remove","lines":["5"],"id":4}],[{"start":{"row":11,"column":49},"end":{"row":11,"column":50},"action":"insert","lines":["6"],"id":5}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["// "],"id":6}],[{"start":{"row":15,"column":9},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":16,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":17,"column":0},"end":{"row":27,"column":49},"action":"insert","lines":["// PASSPORT CONFIGURATION","app.use(require(\"express-session\")({","    secret: \"Once again Rusty wins cutest dog!\",","    resave: false,","    saveUninitialized: false","}));","app.use(passport.initialize());","app.use(passport.session());","passport.use(new LocalStrategy(User.authenticate()));","passport.serializeUser(User.serializeUser());","passport.deserializeUser(User.deserializeUser());"],"id":8}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"insert","lines":["// "],"id":9}],[{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"insert","lines":["/"]},{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":122,"column":0},"end":{"row":123,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":123,"column":0},"end":{"row":124,"column":0},"action":"insert","lines":["",""]},{"start":{"row":124,"column":0},"end":{"row":125,"column":0},"action":"insert","lines":["",""]},{"start":{"row":125,"column":0},"end":{"row":126,"column":0},"action":"insert","lines":["",""]},{"start":{"row":126,"column":0},"end":{"row":127,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":124,"column":0},"end":{"row":126,"column":15},"action":"insert","lines":["//  ===========","// AUTH ROUTES","//  ==========="],"id":12}],[{"start":{"row":126,"column":15},"end":{"row":127,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":127,"column":0},"end":{"row":128,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":128,"column":0},"end":{"row":144,"column":3},"action":"insert","lines":["// show register form","app.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","//handle sign up logic","app.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});"],"id":14}],[{"start":{"row":146,"column":0},"end":{"row":147,"column":0},"action":"insert","lines":["",""],"id":15}],[{"start":{"row":147,"column":0},"end":{"row":163,"column":3},"action":"insert","lines":["// show login form","app.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","// handling login logic","app.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","// logic route","app.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});"],"id":16}],[{"start":{"row":164,"column":0},"end":{"row":165,"column":0},"action":"insert","lines":["",""],"id":17}],[{"start":{"row":165,"column":0},"end":{"row":170,"column":1},"action":"insert","lines":["function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}"],"id":18}],[{"start":{"row":164,"column":0},"end":{"row":165,"column":0},"action":"insert","lines":["",""],"id":19},{"start":{"row":165,"column":0},"end":{"row":165,"column":1},"action":"insert","lines":["/"]},{"start":{"row":165,"column":1},"end":{"row":165,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":172,"column":0},"end":{"row":173,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":173,"column":0},"end":{"row":174,"column":0},"action":"insert","lines":["",""]},{"start":{"row":174,"column":0},"end":{"row":175,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":88,"column":39},"end":{"row":88,"column":51},"action":"insert","lines":[", isLoggedIn"],"id":22}],[{"start":{"row":100,"column":36},"end":{"row":100,"column":48},"action":"insert","lines":[", isLoggedIn"],"id":23}],[{"start":{"row":29,"column":2},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":30,"column":0},"end":{"row":33,"column":3},"action":"insert","lines":["app.use(function(req, res, next){","   res.locals.currentUser = req.user;","   next();","});"],"id":25}],[{"start":{"row":34,"column":0},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":["/"]},{"start":{"row":35,"column":1},"end":{"row":35,"column":2},"action":"insert","lines":["/"]}]]},"ace":{"folds":[],"scrolltop":943.5,"scrollleft":0,"selection":{"start":{"row":93,"column":41},"end":{"row":93,"column":51},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":31,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1558128677874,"hash":"b3b36a636687552f727fd493d0f3e798c0b5b04b"}