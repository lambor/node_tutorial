/**
 * Created by lambor on 17-6-7.
 */
var fs = require('fs');
var data = fs.readFileSync("/etc/hosts","utf-8");
console.log(data);
console.log('end.');