/**
 * Created by lambor on 17-6-7.
 */
var EventEmitter = require('events').EventEmitter;

var event = new EventEmitter();
event.on('some_event',()=>console.log('some_event occured.'));

setTimeout(()=>event.emit("some_event"),1000);
