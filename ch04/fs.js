/**
 * Created by dcnh on 17-6-10.
 */
var fs = require('fs')

fs.readFile('/etc/hosts',function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.readFile('/etc/hosts','utf-8',function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.readFile('/etc/hosts1',function(err,data){
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})

fs.open('/etc/hosts',"r",function(err,fd){
    if(err){
        console.err(err)
    } else {
        var buf = new Buffer(8)
        fs.read(fd,buf,0,8,null,function (err, bytesRead, buffer) {
            if(err) {
                console.err(err)
            } else {
                console.log('bytesRead '+bytesRead)
                console.log(buffer)
            }
        })
    }
})