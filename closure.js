function testClosure(){
    for (var i=0;i<=5;i++){
        //var i belonging to testClosure scope
        // when the callback is run it refers to i and receives the value of i =6 in all cases
        setTimeout(function(){console.log("first count: " + i)},i);
        //j is the local variable to for loop only: per-iteration block scope
        let j = i;
        setTimeout(function(){console.log("second count: " + j)},i+100);
        //j is scoped to iffe
        (function(j){setTimeout(function(){console.log("third count: " + j)},i+200);})(i)
    }
    //let is local to each iteration
    for(let i=0;i<=5;i++){
        setTimeout(function(){console.log("fourth count: " + i)},300+i);
    }
    
}
testClosure()