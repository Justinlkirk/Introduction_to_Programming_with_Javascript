let greeter = function() {
  let rlSync = require('readline-sync');
  
  let name = rlSync.question("What's your first name?\n");
  name += " " + rlSync.question("What's your last name? ");
  
  return  name;
}//Asks a user their first and last name then tells them hello

let age = function () {
  const ageIncrement = 10, loopDuration = 4, name = greeter();
  
  let rlSync = require('readline-sync');
  let startingAge = Number(rlSync.question("What's your age? "));
  
  let futureAge = startingAge;
  
  console.log(`You are ${futureAge} years old.`)
  
  for (let i=0; i<loopDuration; i++) {
    futureAge += ageIncrement;
    console.log(`In ${ageIncrement * (i +1)} years, ${name} will be ${futureAge}.`);
  }
}//Takes someones current age and tells them how old they will be every ten years

console.log(age());