class Subject {
    constructor() {
        this.observers = [];
        this.num = 0;
    }
    setState(num) {
        this.num = num;
        this.notifyAll();
    }
    getState() {
        return this.num;
    }
    attach(observer) {
        this.observers.push(observer);
    }
    notifyAll() {
        this.observers.forEach(observer => observer.update());
    }

}
class Observer {
    constructor(subject) {
        this.subject = subject;
        this.subject.attach(this);
    }
}
class AnimalObserver extends Observer {
    constructor(subject) {
        super(subject);
    }
    update() {
        console.log("From animal: subject value is updated to: " + this.subject.getState());
    }
}
class HumanObserver extends Observer {
    constructor(subject) {
        super(subject);
    }
    update() {
        console.log("From human: subject value is updated to: " + this.subject.getState());
    }
}
var subject = new Subject();
var animalObserver = new AnimalObserver(subject);
var humanObserver = new HumanObserver(subject);
subject.setState(1);