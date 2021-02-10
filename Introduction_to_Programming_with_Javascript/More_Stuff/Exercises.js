console.log("1. This code will log [1, 4, 3] because array2 wasy pointed at the same location as array1 and then the data at that location was mutated.");// Problem 1

console.log("2. This tells me that in the file exercise2.js on line four the variable greetings is used without it being within the current scope.")// Problem 2

console.log(Math.sqrt(37));// Problem 3

console.log([1, 6, 3, 2].reduce((acc, curr) => Math.max(acc, curr)));// Problem 4
console.log([-1, -6, -3, -2].reduce((acc, curr) => Math.max(acc, curr)));// Problem 4
console.log([2, 2].reduce((acc, curr) => Math.max(acc, curr)));// Problem 4

function allMatches(array, searchTerm) {
  let newArray = [];
  array.forEach((currentWord) => {
    if (searchTerm.test(currentWord)) newArray.push(currentWord);
  });
  return newArray;
};// Problem 6

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];// Problem 6

console.log(allMatches(words, /lab/));// Problem 6

function isNaN(value) {
  if (typeof value !== "number") return false;
  else if (value) return false;
  else if (value === 0) return false;
  else return true;
};// Determines if the given value is NaN

console.log("Exception handling takes in consideration what invalid inputs something in your code can receive, and tells it what to do with them. TypeErrors and things.")

console.log(isNaN(NaN));// Problem 8
console.log(isNaN(0));// Problem 8
console.log(isNaN(1));// Problem 8
console.log(isNaN("Three"));// Problem 8

function isNeg0(value){
  return !value && 1/value === -Infinity;
  
}// Determines if the given value is -0

console.log(isNeg0(-0));// Problem 9
console.log(isNeg0(1));// Problem 9
console.log(isNeg0(0));// Problem 9

console.log("Terrible terrible things get returnd. I mean I guess thats a way to turn a string integer into an integer....")// Problem 10