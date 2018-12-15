async function a() {
    console.log(await Promise.resolve(42))/* .then((value)=>console.log('This is: '+value)) */
    return "done"
}

a().then((val)=>{console.log(val)})
function addAllPromise(...args){
    let promises = []
    for(let i of args[0]){
        promises.push(Promise.resolve(i))
    }
    return Promise.all(promises).then(args=>{
        let sum = args.reduce((total,num) => {return total+num});
        console.log(sum);
        return sum;
    })
}
async function getResult(...nums){
    var sum = await addAllPromise(nums);
    console.log(sum)
}
getResult(1,2,3);