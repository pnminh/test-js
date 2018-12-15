function foo(){
    console.log(this.a)
    return () => {console.log(this.a)}
}
var obj1 ={
    a:1
}
var obj2 = {
    a:2
}
var shouldBeObj1 = foo.call(obj1);
shouldBeObj1.call(obj2);

function foo1() {
	console.log( this.a1 );
}

var a1 = 2;

foo1(); // 2

function foo2() {
    console.log(this.b);
}
var obj3 = {
    b:2,foo2:foo2
}
var obj4 = {foo2:obj3.foo2}
var obj5 = {
    b:5,foo2:obj4.foo2
}
obj4.foo2()
obj5.foo2()
function makeCallBack(fn){
    // lose reference to the call-site
    fn();
}
makeCallBack(obj5.foo2)
function makeCallBackWithBinding(objToBind,fn){
    fn = fn.bind(objToBind)
    fn()
}
makeCallBackWithBinding(obj5,obj4.foo2);