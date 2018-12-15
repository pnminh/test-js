function maxOcurrence(arr){
 let obj = {}
 for(item of arr){
     if(!obj[item]){
        obj[item]=0
     }
     obj[item]++
 }
 console.log(Object.values(obj))
 return Math.max(...Object.values(obj))//Math.max(4,2,3,7)
}
console.log(maxOcurrence([1,1,1,1,2,2,3,3,3,4,4,4,4,4,4,4]))