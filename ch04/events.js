/**
 * Created by dcnh on 17-6-10.
 */
var events = require('events')

var emitter = new events.EventEmitter();

emitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2)
})

emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2)
})

emitter.emit('someEvent')

emitter.emit('someEvent','hello','word')