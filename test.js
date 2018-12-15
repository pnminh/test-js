/* var bestFood =  [{name: 'Cookie'}, {name: 'Pizza'}];
for (let i = 0; i < bestFood.length; i++){
  console.log(bestFood[i].name);//it prints both the property name and the value. I only want to print the value.
} */
function squareDigit(number){
  return number.toString().split("")
  .map(digitString => Math.pow(digitString,2))
  .reduce((result,digitString) => result += digitString,"");
}

class Foo {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }
}
var foo = new Foo(1, 2);
console.log(foo);

class Cat 
{
  say(){
    console.log("I'm cat")
  }
}
class Dog extends Cat
{
  constructor(){
    super()
    this.name = "dog"
  }
  say(){
    console.log(this)
    console.log("I'm "+this.name)
  }
  sayHello(){
    console.log("hello");
    this.say()
  }
  static sayStatic(){
    console.log("I'm a static dog")
  }
}
var dog = new Dog()
dog.sayHello()
a = dog.say
a()