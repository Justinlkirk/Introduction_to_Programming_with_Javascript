let age = function (ageIncrement = 10) {
  const loopDuration = 4, name = greeter();
  
  let rlSync = require('readline-sync');
  let startingAge = Number(rlSync.question("What's your age? "));
  
  let futureAge = startingAge;
  
  console.log(`You are ${futureAge} years old.`)
  
  for (let i=0; i<loopDuration; i++) {
    futureAge += ageIncrement;
    console.log(`In ${ageIncrement * (i +1)} years, ${name} will be ${futureAge}.`);
  }
}//Takes someones current age and tells them how old they will be every ten years

let greeter = function() {
  let rlSync = require('readline-sync');
  
  let name = rlSync.question("What's your first name? ");
  name += " " + rlSync.question("What's your last name? ");
  
  return  name;
}//Asks a user their first and last name then tells them hello

function factorial(number) {
  let total = 1;
  
  for (let i=2; i<=number; i++){
    total *= i;
  }
  return total;
}// For loop version of a factorial

function recursiveFactorial(number) {
  if (number === 1) return 1;
  return number * recursiveFactorial(number - 1);
}// Recursive attempt at factorials

console.log(age());// Problem 1

console.log(factorial(1));// 1
console.log(factorial(5));// 120
console.log(recursiveFactorial(1));// 1
console.log(recursiveFactorial(5)); // 120

console.log("Because you actually set counter to 1 instead of comparing counter to 1");// Problem 3

console.log("No. It looks like an error, and honestly I don't think you should set a value inside a console.log statement, but i does actually increment so it'll be fine.");// Problem 4

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2)

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

console.log("Already did it! See above.");// Problem 6