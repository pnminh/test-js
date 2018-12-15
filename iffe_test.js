calculate = (() => {
    var add=(a, b)=> {
        return a + b;
    }
    var multiply = (a,b) =>{
        return a*b;
    }
    return{
        add:add,
        multiply:multiply
    }
})();
console.log(calculate.add(1,2));