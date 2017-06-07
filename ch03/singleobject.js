/**
 * Created by lambor on 17-6-7.
 */
function Hello() {
    var name;

    this.setName = (thyname)=>name=thyname;

    this.sayHello = ()=>console.log("Hello %s",name);
}
module.exports = Hello;