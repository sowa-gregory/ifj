var static = require('node-static');
var http = require('http');

var file = new(static.Server)("public_html");

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(process.env.PORT || 8080)