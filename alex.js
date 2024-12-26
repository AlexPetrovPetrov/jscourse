let bankAccount = 1000000;
if (bankAccount < 100000) {
  console.log("You are broke.");
} else if ((bankAccount) => 1000000) {
  console.log("You are rich.");
} else {
  console.log("You are broke.");
}
let myAge = 30;
if (myAge < 18 || myAge > 30 || myAge === 23) {
  console.log("You won't come to our holiday party.");
} else {
  console.log("You can come to our party.");
}
let martinsAge = 4;
while (martinsAge < 20) {
  martinsAge++;
}
for (bobosAge = 2; bobosAge < 18; bobosAge++) {
  console.log("You are less than 18 years old.");
}
function fees(bankAccount, tax) {
  let afterFeeBankAccount = bankAccount - tax;
  console.log(afterFeeBankAccount);
  console.log("Bank account after bank fees", afterFeeBankAccount);
}
fees(100000, 0.05);
console.log(Math.PI);
//using math object.This object is for more complex things.I need to remember round,pi,max,min

a = 3;
b = 10;
if (!isNaN(a)) {
  console.log("This is a number.");
} else {
  console.log("This is not a number.");
}
var myString = 'I\'m a "fun"string';
console.log(myString);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("string"));
let meat = "pork, lamb, chicken, salami, ham";
let meaArray = meat.split(",");
let message = "Hello world";
console.log(message.slice(2, 8));

let dogBreeds = ["pomeranian", "husky", "poodle", 1];
console.log(dogBreeds.length);
console.log(dogBreeds.reverse());
console.log(dogBreeds.sort());
//An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. Objects in JavaScript, just as in many other programming languages, can be compared to objects in real life.
let myCar = new Object();
this.maxSpeed = 200;
myCar.driver = "Alex";
myCar.drive = function(speed,time){
   let drivenDistance= speed * time;
   console.log(drivenDistance);
}
myCar.drive(100,5);
//The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

let MyCar2 = function(topSpeed,chauffeur) {
  this.topSpeed = topSpeed;
  this.chauffeur = chauffeur;
  this.guide = function(pace,tempo) {
   console.log(pace * tempo)
  };
};
MyCar2(50,3);
var myDate = new Date();
console.log(myDate)