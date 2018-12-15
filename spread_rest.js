let person = {
    name: "test person",
    callMyName: function () {
        console.log(this.name);
    }
}
let spread_person = {
    ...person,
    employer: "spread corp."
}
console.log(spread_person);
spread_person.callMyName()

//rest
let addAllRest = async (...nums) => {
    return await Promise.all(nums.map(num => Promise.resolve(num)))
        .then((nums) => {
            return nums.reduce((total, num) => total + num)
        })
}
addAllRest(1, 2, 3, 4).then(total => console.log(total));