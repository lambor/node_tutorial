/**
 * Created by dcnh on 17-6-10.
 */
console.log(process.argv)

function doSomething(argv,callback) {
    console.log(argv)
    process.nextTick(callback)
}

doSomething("hello",function(){
    console.log("world")
})

doSomething("hello1",function(){
    console.log("world1")
})

console.log("byvoid%diovyb",1992)