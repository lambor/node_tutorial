/**
 * Created by dcnh on 17-6-10.
 */
var util = require('util')

function Base() {
    this.name = 'base'
    this.base = 1991

    this.sayHello = function() {
        console.log("Hello" + this.name)
    }
}

Base.prototype.showName = function() {
    console.log(this.name)
}

Base.prototype.test = "test"

function Sub() {
    this.name = 'sub'
}

util.inherits(Sub,Base)

var objBase = new Base()
objBase.showName()
objBase.sayHello()
console.log(objBase)

var objSub = new Sub()
objSub.showName()
console.log(objSub)

function Person() {
    this.name = 'byvoid'
    this.toString = function() {
        return name
    }
}

var obj = new Person()
console.log(util.inspect(obj))
console.log(util.inspect(obj,true))
console.log(util.inspect(objSub,true))