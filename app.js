var express = require("express"),
app = express(),
port = 8080;

app.use(function(req, res){
   var data = req.headers;
   var obj = {};
   obj.ip = data['x-forwarded-for'];
   obj.lang = data['accept-language'].split(',')[0];
   obj.software = data['user-agent'].split(/ /, 5).join(' ').split('(')[1].split(')').join('');
   res.writeHead(200, {'Content-Type' : 'text-plain'});
   res.end(JSON.stringify(obj));
   //console.log(JSON.stringify(obj));
   
}).listen(port);

console.log("Server is running...")