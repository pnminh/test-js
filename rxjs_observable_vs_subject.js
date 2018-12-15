/* const { Observable } = require('rxjs/Observable');
 */rxjs = require('rxjs');
require('rxjs/add/observable/of');
const subject = new rxjs.Subject();
subject.subscribe((val) => {console.log(`subscriber 1 get value: ${val}`)});
subject.subscribe((val) => {console.log(`subscriber 2 get value: ${val}`)});
const observable = rxjs.Observable.of(`A ${Math.random()}`);
observable.subscribe(subject);
observable.subscribe((val) => {console.log(`observable subscriber 1 get value: ${val}`)});
observable.subscribe((val) => {console.log(`observable subscriber 2 get value: ${val}`)});
subject.next(Math.random());

const observer1 = (val) => {console.log(`Hello from observer: ${val}`)};
observable.subscribe(observer1);