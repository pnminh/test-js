obj1 ={
    "test":true
}
obj2 = {
    "name":"obj"
}
obj3={}
obj3[obj1] = "obj1"
obj3[obj2] = "obj2"
//this should be object1, but since obj is converted to string as [object Object], this will bring obj2 instead
console.log(obj3[obj1])

var myObject = {
	// define a getter for `a`
	get a() {
		return this._a_;
	},

	// define a setter for `a`
	set a(val) {
		this._a_ = val * 2;
	}
};

myObject.a = 2;

console.log(myObject.a); // 4
console.log(myObject._a_);