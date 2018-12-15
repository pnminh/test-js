function* gen(a, b) {
    try {
        var result = yield add(a, b)
        console.log(result);
    } catch (error) {
        console.log(error)
    }
}

function add(a, b) {
    new Promise((resolve, reject) => {
        resolve(a + b)
    }).then((val) => {
        if (val == 3) it.next(val)
        else it.throw("cannot add items")
    }).catch(err=> console.log("from add: "+err))

}
var it = gen(2, 2);
it.next();
//it = gen(2, 2);
//it.next();
//throw exception from main thread
function* gen2() {
    try {
        let x = yield "hello world";
        console.log("gen2 x:" + x)
    } catch (err) {
        console.log("throw inside gen2: " + err);
    }
    let x = yield "hello world";
}
var it = gen2();
it.next();
it.throw("Oops");
it.next();
try {
    it.throw("Oops 2")
} catch (err) {
    console.log("throw from main: " + err)
}
function getPromise(){
    return Promise.resolve(2);
}
function *callPromise(){
    var x = yield getPromise()
    console.log("inside callPromise: " + x)
}
let it1 = callPromise()
//get the promise
p = it1.next().value
p.then(val => it1.next(val))