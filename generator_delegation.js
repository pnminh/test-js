function *foo(){
    console.log("start *foo")
    yield 1;
    yield 2;
    console.log("end *foo")
}
function *bar(){
    console.log("start *bar")
    yield *foo();
    console.log("end *bar")
    return 3;
}
var it = bar();
console.log(it.next());
console.log(it.next());
console.log(it.next());