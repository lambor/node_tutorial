/**
 * Created by lambor on 17-6-7.
 */
var fs = require('fs');
fs.readFile('/etc/hosts','utf-8',function(err,data) {
    if(err)
        console.error(err);
    else
        console.log(data)
});
console.log('end');