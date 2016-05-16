console.log('First step');
var app = require("./server/routes");
//var express = require('express');
//var app = express();

//app.get('/', function(req,res){
//   res.send('What is going on?');
//});

//var port = 9000;
//app.listen(port);

//console.log('Listening on port %d', port);

// Start the server
var server = app.listen(9000, function() {
 console.log('Listening on port %d', server.address().port);
});
