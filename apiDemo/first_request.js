const request = require('request');

// request('http://www.google.com', function (error, response, body) {
//     if(!error && response.statusCode == 200){
//         console.log(body);
//     }
// });


request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
    // eval(require("locus"));
    if(!error && response.statusCode == 200){
        var parsedData = JSON.parse(body); // turn into object
        console.log(parsedData["name"]);
    }
});