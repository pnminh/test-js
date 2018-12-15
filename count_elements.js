function countElement(item){
    if(!Array.isArray(item)){
        return 1;
    }
    var count = 0;
    for(ele of item){
        count += countElement(ele);
    }
    return count;
}
console.log(countElement([1,2,[3,4]]))