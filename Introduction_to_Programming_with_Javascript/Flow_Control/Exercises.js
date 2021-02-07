function evenOrOdd(num) {
  if (((num % 1) !== 0) || (typeof(num) !== "number")) return "Please submit an integer.";
  else {
    let parity = num % 2;
    
    return parity ? "odd" : "even";
  }
}//Takes an integer and returns its parity

function problemFourSolution() {
  if (foo()) return 'bar';
  else return qux();
}// The conversion of the ternary presented in problem 4

function foo() { return true; }// Had to give this a value to call it

let qux = () => "qux";// Had to give this a value to call it as well

function longWordCaps(word) {
  if (word.length <= 10) return word;
  else return word.toUpperCase();
}// Converts a word to all uppercase if its more than 10 letters long

function numberRange(numbs) {
  for (let ele of numbs) {
    if (ele < 0) console.log("Less than 0");
    else if (ele < 50) console.log("Between 0 and 50");
    else if (ele < 100) console.log("Between 51 and 100");
    else console.log("More than 100");
  }
}// Determines the range of a number

console.log("In order these should evaluate as false, true, 3, 3, false, true, false, false, false, true, false, true");// Problem 1

console.log(evenOrOdd("9"));// Problem 2/3

console.log("It will log 'Product2'\n'Product3'\n'Product not found!' because the second case will trigger it, but then there is no break statement so it'll fall through and give all the other outputs.");// Problem 4

console.log(problemFourSolution());// Problem 5

console.log("Should put out 'not empty' despite being empty.");// Problem 6

console.log(longWordCaps("hello world"))// Problem 7
;
console.log(numberRange([25, 75, 125, -25]));// Problem 8