var a = Promise.resolve(42);
a.then((value) => {
    console.log("resolve " + value)
});
var b = Promise.reject(42);
b.then(value => console.log("resolve: " + value)).catch(value => console.log("reject " + value))

function shouldReject() {
    return new Promise((resolve, reject) => {
        resolve(Promise.reject("Should show the reject message"));
    })
}
shouldReject().then(
    () => {
        console.log("should not print anything here")
    },
    (err) => {
        console.log(err)
    }
)
a.then((num)=>num.toLowerCase()).catch((e)=>{console.log("error should go here: "+e)})

c = Promise.resolve(1);
d = Promise.resolve(2);
Promise.all([c,d]).then((msgs)=>{console.log(msgs[0]+msgs[1])})
Promise.race([c,d]).then((msg)=>{console.log(msg)})

thenableResolve = {
    then: (cb)=>cb(42)
}
thenableReject = {
    then: (cb,errCb)=>{errCb("Error from thenable")}
}
Promise.resolve(thenableResolve).then((result)=>console.log("result is resolved to " + result))
Promise.resolve(thenableReject).catch((err)=>console.log(err))
Promise.resolve(42).then((val)=>{return val}).then((val)=> console.log(val))


new Promise(()=>{console.log('test promise')});
