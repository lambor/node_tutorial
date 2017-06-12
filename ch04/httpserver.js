/**
 * Created by dcnh on 17-6-10.
 */

var http = require('http')

var server = new http.Server()
server.on('request',function(req,res){

    if(req.method == 'GET') {
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>Node.js</h1>')
        res.end('<p>Hello World</p>')
        console.log("get:"+req.url)
    } else if(req.method == 'POST') {
        var post = ''
        req.on('data',function(chunk){
            post += chunk
        })
        req.on('end',function(){
            console.log("post:"+post)
        })
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('hello there')
        res.end()
    }

})
server.listen(3000)
console.log("Http Server is listening at port 3000")