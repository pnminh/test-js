function* myGenerator() {
    console.log(1);
    let a = yield 'first yield';
    console.log(a);
    let b = yield 'second yield';
    console.log(b);
    return 'hi';
}

let iterator = myGenerator();
let firstYield = iterator.next(); // { value: 'first yield', done: false }
console.log(firstYield)
let secondYield = iterator.next(2);
console.log(secondYield)


var x = 1;

function* foo() {
    x++;
    yield; // pause!
    console.log("x:", x);
}

function bar() {
    x++;
}
let iter = foo();
iter.next();
console.log("x:", x)
bar()
iter.next();

function* letYield() {
    var a = (yield 8) + 1
    console.log(a)
}
iter = letYield()
iter.next()
iter.next(8)


var a = 1;
var b = 2;

function *foo1() {
	a++;
	yield;
	b = b * a;
	a = (yield b) + 3;
}

function *bar1() {
	b--;
	yield;
    a = (yield 8) + b;
    c=(yield 2);
    console.log("a="+a)
	b = a * c;
}
function step(gen) {
	var it = gen();
	var last;

	return function() {
		// whatever is `yield`ed out, just
		// send it right back in the next time!
        last = it.next( last ).value;
        
	};
}
// make sure to reset `a` and `b`
a = 1;
b = 2;

var s1 = step( foo1 );
var s2 = step( bar1 );

s2();		// b--;
console.log( a, b );
s2();		// yield 8
console.log( a, b );
s1();		// a++;
console.log( a, b );
s2();		// a = 8 + b;
console.log( a, b );
			// yield 2
s1();		// b = b * a;
console.log( a, b );
			// yield b
s1();		// a = b + 3;
console.log( a, b );
s2();		// b = a * 2;
console.log( a, b );	// 12 18