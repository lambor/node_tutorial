/**
 * Created by dcnh on 17-6-10.
 */
var http = require('http')
http.get({host: '127.0.0.1', port: 3000}, function (res) {
    res.setEncoding('utf8')
    res.on('data', function (data) {
        console.log('get: 127.0.0.1:3000 result:' + data)
    })
})

var queryContent = 'hello world'

var options = {
    host: '127.0.0.1',
    port: 3000,
    method: 'POST',
    headers: {
        'Content-Length': queryContent.length
    }
}

var req = http.request(options, function (res) {
    res.setEncoding('utf8')
    res.on('data',function (data) {
        console.log('post: 127.0.0.1:3000 result: '+ data);
    })
});
req.write(queryContent);
req.end()