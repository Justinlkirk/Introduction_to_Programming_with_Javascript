console.log("person.name and person[name] will both access the name.");//Problem 1

console.log("They are all valid keys, but JavaScript will coerce the non-string values to strings");// Problem 2

let myArray = {
  0: "blue", 1: "red", 2: "purple", length: 3
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}//Problem 3

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = myProtoObj;// Problem 5
myObj.quc = 3;

console.log(myObj);//Problem 4

console.log("In order primitive, primitive, object, primitive, neither, object, primitive, and object");// Problem 6

console.log("No, aparently object.forEach only iterates over the objects uniquely defined keys not its prototypes. This is going to bite me at some point.");// Problem 7

function objectCreator(origObj, desiredKeys) {
  let newObj = {};
  
  if (desiredKeys === undefined) return origObj;
  else {
    for (let ele of desiredKeys) {
      newObj[ele] = origObj[ele];
    }
  return newObj;
  }
};

console.log(objectCreator(myObj));// Problem 8
console.log(objectCreator(myObj, ['foo', 'bar']));// Problem 8

console.log("Ok this one was unexpected. Clears some stuff up though.")// Problem 9

console.log("Six primitive values. Four objects");// Problem 10

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;// This got me for a second. I didn't realize the value for bar was an array at first.

console.log(obj);// Problem 11