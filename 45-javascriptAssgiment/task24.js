let car = "TOYOTA";

if (car === "TOYOTA") {
  console.log("Is car === 'TOYOTA'? I predict True.");
  console.log(car === "TOYOTA");
}
if (car !== "TOYOTA") {
  console.log("Is car !== 'TOYOTA'? I predict FAlse.");
  console.log(car !== "TOYOTA");
}
// javascript is case sensitive that way this is false
if (car === "toyota") {
  console.log("Is car === 'toyota'? I predict FAlse.");
  console.log(car === "toyota");
}
// numeric condition
let num = 9;
if (num == "9") {
  console.log("Is num == '9'? I predict True.");
  console.log(num == "9");
}
if (num === "9") {
  console.log("Is num === '9'? I predict False.");
  console.log(num === "9");
}
if (num > 5) {
  console.log("Is num > 5? I predict True.");
  console.log(num > 5);
}
if (num < 10) {
  console.log("Is num < 10? I predict True.");
  console.log(num < 10);
}
// for arry
let arr = ["danish", "rehan", "azam"];
if (arr.indexOf("danish") === 0) {
  console.log("In the index of 0 value is danish ? predict its true");
  console.log(arr.indexOf("danish") === 0);
}
let arr1 = ["danish", "rehan", "azam"];
if (arr.indexOf("mansab") === 2) {
  console.log("In the index of 2 value is azam not mansab ? predict its False");
  console.log(arr.indexOf("mansab") === 0);
}
// && and || operator
let num1 = 45;
// in && operater if one statement is false its return false
if (num1 > 40 && num1 < 50) {
  console.log("both is true then print the True ");
  console.log(num1 > 40 && num1 < 50);
}
// in || operater if any one statement is ture its return  ture
if (num1 > 40 || num1 < 42) {
  console.log("both and one  is true then print the True ");
  console.log(num1 > 40 || num1 < 42);
}
