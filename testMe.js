var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send('What is up?');
   });

var port = 9000;
app.listen(port);
console.log('Listening on port ', port);
