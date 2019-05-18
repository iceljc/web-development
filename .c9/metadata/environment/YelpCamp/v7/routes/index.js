{"filter":false,"title":"index.js","tooltip":"/YelpCamp/v7/routes/index.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":56,"column":24},"action":"insert","lines":["var express = require(\"express\");","var router  = express.Router();","var passport = require(\"passport\");","var User = require(\"../models/user\");","","//root route","router.get(\"/\", function(req, res){","    res.render(\"landing\");","});","","// show register form","router.get(\"/register\", function(req, res){","   res.render(\"register\"); ","});","","//handle sign up logic","router.post(\"/register\", function(req, res){","    var newUser = new User({username: req.body.username});","    User.register(newUser, req.body.password, function(err, user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req, res, function(){","           res.redirect(\"/campgrounds\"); ","        });","    });","});","","//show login form","router.get(\"/login\", function(req, res){","   res.render(\"login\"); ","});","","//handling login logic","router.post(\"/login\", passport.authenticate(\"local\", ","    {","        successRedirect: \"/campgrounds\",","        failureRedirect: \"/login\"","    }), function(req, res){","});","","// logout route","router.get(\"/logout\", function(req, res){","   req.logout();","   res.redirect(\"/campgrounds\");","});","","//middleware","function isLoggedIn(req, res, next){","    if(req.isAuthenticated()){","        return next();","    }","    res.redirect(\"/login\");","}","","module.exports = router;"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":56,"column":24},"end":{"row":56,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1558129451652,"hash":"22fb40e7a58175afbaa4062a39b7034914125ed7"}