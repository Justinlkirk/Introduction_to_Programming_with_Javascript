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

console.log(exerciseOne("John", "Doe"));//John Doe

console.log(exerciseTwo(4936));/*The digits of your number from the ones place onward are:
                                4
                                9
                                3
                                6*/

console.log();