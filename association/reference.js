var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

// // create a post, push it into user's posts and show the user data with post ids
// Post.create({
//   title: "How to cook the best burger pt. 2",
//   content: "blah blah blah"
// }, function(err, post){
//     User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if (err) {
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });


// Find user
// find all posts with details for that user

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});
