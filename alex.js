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
console.log(myString.toLocaleUpperCase);
console.log(myString.toLocaleLowerCase);
console.log(myString.indexOf("string"));
let meat = "pork, lamb, chicken, salami, ham"
let meaArray = meat.split(",");
let message = "Hello world"
console.log(message.slice(2,8))