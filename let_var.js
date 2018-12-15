function testVar(){
    {
        var a = 3;
    }
    console.log(a);
}
function testLet(){
    {
        let a = 3;
    }
    //will throw error: ReferenceError: a is not defined
    //console.log(a);
}
testVar();
testLet();
function testIterationVar(){
    for(var i=0;i<10;i++){}
    console.log(i);
}
function testIterationLet(){
    for(let i=0;i<10;i++){}
    //ReferenceError: i is not defined
    //console.log(i);
}
testIterationVar();
testIterationLet();