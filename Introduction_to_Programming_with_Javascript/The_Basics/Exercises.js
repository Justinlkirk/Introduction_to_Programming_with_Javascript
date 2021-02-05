let exerciseOne = function (firstString, secondString) {
  let newString = firstString + " " + secondString;
  return newString;
}//Combines two strings with a space in the middle

let exerciseTwo = function (number) {
  let digit, newNumber = number, count = 0;
  
  console.log("The digits of your number from the ones place onward are:");
  
  do {
    digit = newNumber % 10;
    console.log(digit);
    
    newNumber /= 10;
    newNumber -= digit/10;
    if (newNumber < 10) return newNumber;
    
    count++;
  } while (count < 100);
  return "The number had more than 100 digits or something failed!";
}//Uses arithmatic operators to determine each digit in given number

let exerciseSix = function (numberOne, numberTwo) {
  return `The value of ${numberOne} plus ${numberTwo} is ${numberOne + numberTwo}.`
}//Adds two numbers together and logs the process.

let exerciseEight = function (...names) {
  return names;
}

let exerciseNine = function () {
  let petObject = { Asta: 'dog', Butterscotch: 'cat', Pudding: 'cat', Neptune: 'fish', Darwin: 'lizard' };
  return petObject;
}//Creates an object with the keys being the name of the pet and the value being the type of pet it is

console.log(exerciseOne("John", "Doe"));//John Doe

console.log(exerciseTwo(4936));/*The digits of your number from the ones place onward are:
                                4
                                9
                                3
                                6*/

console.log("The data type of 'true' is String, false is Boolean, 1.5 is Number, 2 is Number, undefined is Undefined, and { foo: 'bar' } is an Object.");

console.log("The reason that console.log('5' + 10) outputs '510' instead of 15 is that JavaScript assumes you want 10 to be a String instead of a Number so it converts it to a string and then concatenates it with '5'.");

console.log(exerciseSix(Number('5'), 10));//The value of 5 + 10 is 15.

console.log("No it will output 'undefined' as that is the value currently stored there in the array.");

console.log(exerciseEight("Asta", "Butterschotch", "Pudding", "Neptune", "Darwin"));// [Asta, Butterscotch, Pudding, Neptune, Darwin]

console.log(exerciseNine());//{ Asta: 'dog', Butterscotch: 'cat', Pudding: 'cat', Neptune: 'fish', Darwin: 'lizard' }

console.log("parseInt('3.1415') evaluates to 3 because when it hits the decimal it stops and returns all the number it saw before it. If the number was not in quotes it would return the entire number");//The statement thats in there.

console.log("'12' < '9' evaluates as true. This makes sense because 'a' < 'b' returns true as JavaScript attempts to convert each string index to a number and compare. Therefore it compares 1 < 9 then 2 < 9");//The statement thats in there.