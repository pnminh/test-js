hoistedFunction();
function hoistedFunction(){
    console.log("function declaration is hoisted");
}
function hoistedFunction(){
    console.log("subsequent declaration function takes precedence over the previous one");
}
var hoistedFunction = function(){
    console.log("declaration function takes precedence over variable for hoisting")
}
hoistedFunction();