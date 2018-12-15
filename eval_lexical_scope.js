function evaluateB(evalStr){
    eval(evalStr);
    console.log(b);
}
function evaluateBStrict(evalStr){
    'use strict';
    eval(evalStr);
    console.log(b);
}
var b = 2;
let changeBValue = "var b = 3"
evaluateB(changeBValue);
evaluateBStrict(changeBValue)