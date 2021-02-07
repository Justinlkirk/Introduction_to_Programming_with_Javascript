function greeter() {
  let firstName = questionaire("first"), lastName = questionaire("last");
  
  return `Hello ${firstName} ${lastName}!`;
}//Asks a user what their first and last name is, then tells them hello

function questionaire(nameType) {
  let rslSync = require('readline-sync');
  
  let name = rslSync.question(`What is your ${nameType} name? `);
  
  return name;
}// Prompts the user to input a type of name and returns it

function multiplier() {
  let rslSync = require('readline-sync');
  
  let numOne = rslSync.question(`Enter the first number: `);
  let numTwo = rslSync.question(`Enter the second number: `);
  
  return `${numOne} * ${numTwo} = ${numOne * numTwo}`;
}

console.log("1. It will log 2 to the console. If the function wasn't called it would log 1.");// Problem 1

console.log(greeter());// Problem 2

console.log(multiplier());// Problem 3

console.log("4. Nothing. It returns before the console.log(words); has a chance to output anything.");// Problem 4

console.log("5. This will also log nothing. To fix it you would make it console.log(scream('Yipeee'))");// Problem 5