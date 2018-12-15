var originalObj = {
    name:'a'
}
Object.defineProperty(originalObj,'setGetAttr',{
    get: function(){
        return this.c
    },
    set:function(x){
        this.c = x
    }
})
originalObj.setGetAttr = 3;
//this only link copyingObj to originalObj using prototype: copyingObj.__proto__===originalObj; 
//Object.getPrototypeOf(copyingObj)===originalObj;
//this works similar to Function.prototype when one is created with new
var copyingObj = Object.create(originalObj)
console.log("Is name copyingObject own prop? "+ copyingObj.hasOwnProperty('name'))
console.log("Is originalObj the prototype for copyingObj?" + (Object.getPrototypeOf(copyingObj) === originalObj))
copyingObj.name = 'b'
console.log("Is name copyingObject own prop? "+ copyingObj.hasOwnProperty('name'))
//since this uses setter, this will not create a prop on the copyingObj
copyingObj.setGetAttr = 'should not be from copyingObj'
console.log("Is setGetAttr copyingObject own prop? "+ copyingObj.hasOwnProperty('setGetAttr'))

//need to use defineProperty if we want to set prop to the copyingObj
Object.defineProperty(copyingObj,'setGetAttr',{value:"this should be prop of copyingObj"})
console.log("Is setGetAttr copyingObject own prop? "+ copyingObj.hasOwnProperty('setGetAttr'))

//function Animal has the __proto__ pointing to Function.Prototyp. 
//This is different from object Animal, whose __proto__ points to Animal.Prototype
function Animal(){
    return this;
}
Animal.prototype.name = "animal"
//this return Animal object, having __proto__ pointing to Animal.Prototype
animal = new Animal();
console.log(animal.name)
//this returns global object
animal = Animal()
console.log(animal.name) 
class Dog extends Animal{

}
Dog.prototype.name = "Dog"
dog = new Dog();
console.log(dog.name)
console.log(Dog.prototype.__proto__ === Animal.prototype)
function Cat(){

}
//this works similarly to class Cat extends Animal
Cat.prototype.__proto__ = Animal.prototype
cat = new Cat()
console.log(cat.name)
console.log(cat instanceof Animal)
var a = {};
var b = Object.create( a );
console.log(a.isPrototypeOf(b))

console.log(Cat.prototype.hasOwnProperty('__proto__'))