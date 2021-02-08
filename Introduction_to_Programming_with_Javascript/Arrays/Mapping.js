let numbers = [1, 2, 3, 4]
let squares = numbers.map(num => num * num);

console.log(squares);// [1, 4, 9, 16]

let list = [ 'h', 'e', 'l', 'l', 'o'];
list.map((currElement, index) => {
  console.log("The current iteration is: " + index);
  console.log("The current element is: " + currElement);
  console.log("\n");
  return currElement; //equivalent to list[index]
});// Trying to figure out how to retrieve indexes in a map

let newList = [];
newList = list.map((currEle, index) => {
  if (index === 0) return "first value";
  else return (currEle + list[index - 1]);
})// Ok this is amazing. May be a better way to do this, but this will let me do so much.

console.log(list);