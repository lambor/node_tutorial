/**
 * Created by lambor on 17-6-7.
 */
var Hello = require("./singleobject");
var hello = new Hello();
var hello2 = new Hello();
hello.setName("BYVoid");
hello2.setName("BYVoid 2");
hello.sayHello();