let greeter = function (name) {
  console.log(`Good Morning, ${name}.`);
  console.log(`Good Afternoon, ${name}.`);
  return `Good Evening, ${name}.`;
}//Takes a name and tells them good morning, good afternoon, and goodnight

let age = function (startingAge) {
  const ageIncrement = 10, loopDuration = 4;
  let futureAge = startingAge;
  
  console.log(`You are ${futureAge} years old.`)
  
  for (i=0; i<loopDuration; i++) {
    futureAge += ageIncrement;
    console.log(`In ${ageIncrement * (i +1)} years, you will be ${futureAge}.`);
  }
}//Takes someones current age and tells them how old they will be in x years

console.log(greeter("Victor"));// The answer to exercise 1

console.log(age(20));// The answer to exercise 2

console.log("You get an error because the variable foo was declared with let in a different block.");// The answer to 3

console.log("You keep getting 'Victor' as the name through line 9 because it was declared as a constant therefor it cannot be updated.");// The answer to 4

console.log("You will log 'bar' because that is its value within the block where console.log() is used.");// The answer to 5

console.log("No it just won't update FOO.");// The anser to 6