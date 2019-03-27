/* const { Observable } = require('rxjs/Observable');
 */ rxjs = require("rxjs");
require("rxjs/add/observable/of");
//observable says:hey dvery observer subcribing to me, I hand you the next item here(observer.next())
const observable = rxjs.Observable.create(observer => {
  setTimeout(() => observer.next("Hello"), 2000);
  setTimeout(() => observer.next("im ok"), 4000);
  setTimeout(() => observer.complete("im dead"), 6000);
  //setTimeout(() => observer.complete("Im done"), 8000);
});
let subscriber = observable.subscribe(
  item => {
    console.log("Next item: " + item);
  },
  error => {
    console.log("error: " + error);
  },
  () => {
    console.log("complete");
  }
);
