var gen2x = (function () {
    var nextVal;
    return {
        // needed for `for..of` loops
        [Symbol.iterator]: function () {
            console.log(this)
            return this;
        },
        next: () => {
            if (nextVal === undefined) {
                nextVal = 1;
            } else {
                nextVal = nextVal * 2
            }
            return {
                value: nextVal,
                done: nextVal > 50 ? true : false
            }
        }
    }
})()
for (var v of gen2x) {
    if (v > 100) break;
    console.log(v)
}
var gen3x = (function () {
    var nextVal;
    var iterator = (() => {
        return {
            next: () => {
                if (nextVal === undefined) {
                    nextVal = 1;
                } else {
                    nextVal = nextVal * 2
                }
                return {
                    value: nextVal,
                    done: nextVal > 50 ? true : false
                }
            }
        }
    })()
    return {
        [Symbol.iterator]: function () {
            return iterator;
        }
    }
})()
var it = gen3x[Symbol.iterator]();
for (var a of gen3x) {
    console.log(a)
}

function* gen4x() {
    var nextVal;
    try {
        while (true) {
            if (!nextVal) nextVal = 1;
            else nextVal *= 4
            yield nextVal
        }
    }finally{
        console.log("cleanning up")
    }
}
//gen4x() creates iterator, not gen4x itself, which is a generator
var iter = gen4x();
for (var v of iter) {
    if (v > 100) break;
    console.log("gen4x :" + v);
}