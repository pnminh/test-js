var testModule = (function(){
    function add(a,b){
        return a+b
    }
    function subtract(a,b){
        return a-b
    }
    function multiply(a,b){
        return a*b
    }
    function divide(a,b){
        return a/b
    }
    return {
        //this object has properties refering to the scoped functions
        // it can then get triggered outside of its scope
        add:add,
        subtract:subtract,
        multiply:multiply,
        divide:divide
    }
})()
console.log(testModule.add(1,2))