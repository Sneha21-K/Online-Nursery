var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
fs.readFile('./lab1.html');
res.end();
}).listen(4500)