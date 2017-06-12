/**
 * my first node http server
 * Created by lambor on 17-6-7.
 */

var http = require('http');

http.createServer(function(req,resp){
    resp.writeHead(200,{'Content-Type':'text/html'});
    resp.write('<h1>Node.js</h1>');
    resp.end('<p>Hello World</p>')
}).listen(3000);
console.log("HTTP server is listening at port 3000.");
