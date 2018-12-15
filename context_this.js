function helloContext(){
    console.log("hello " + this.name);
}
function sayContext(context){
    console.log("context name is " + context.name);
}
var cat = {
    name:'tom'
}
var mouse = {
    name: 'jerry'
}
//apply/call bind the function to the context
helloContext.apply(cat);
helloContext.call(mouse);
sayContext(cat);
function TestThis(){
    console.log("hello " + this.name);
}
TestThis.prototype.name="Test this";    
var obj = new TestThis();

function foo(){
    'use strict';
    console.log("this in the context is " + this);
}
foo();
foo2 = foo;foo2();
fooObject = {foo:foo};fooObject.foo();