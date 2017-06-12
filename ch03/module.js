/**
 * Created by lambor on 17-6-7.
 */

var name;
exports.setName = function(thyName) {
    name = thyName
};

exports.sayHello = function() {
    console.log('Hello ' + name)
};

