import {
    Observable,
    BehaviorSubject
} from 'rxjs';
const observeNotRun = new Observable(observer => {
    console.log('ready');
});
const observeSecs = new Observable(observer => {
    let i = 0;
    let token = setInterval(() => {
        observer.next(i++);
    }, 1000);
    return () => {/* clearInterval(token) */};
});
const observeResult = observeSecs.subscribe(val => {
    console.log(val)
});
observeResult.unsubscribe();
observeSecs.subscribe(val => {
    console.log(`the 2nd ${val}`)
})

const secondsPromise = new Promise((resolve) => {
    let i = 0;
    setInterval(() => {
        resolve(i++);
    }, 1000);
});
secondsPromise.then(val => {
    console.log(`promise: ${val}`)
})
secondsPromise.then(val => {
    console.log(`promise: ${val}`)
})
const promiseReturnFunc = new Promise((resolve) => {
    const interval = () => {
        let i = 0;
        setInterval(() => {
            console.log(`promise interval: ${i++}`);
        }, 1000);
    };
    resolve(interval);
});
promiseReturnFunc.then(interval => interval());
var i = setInterval(()=>{console.log('inside interval')},100);