console.log("Array1.length === 4, array2.length === 5, array3.length === 0, array4.length === 3, and array5.length === 101.");// Problem 1

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(num => {if (num % 2 === 0) console.log(num)});// Problem 2

let parityArray = myArray.map(num => {
  if (num % 2 === 0) return "even";
  else return "odd";
});

myArray = [[1, 3, 6, 11],[4, 2, 4],[9, 17, 16, 0],];

myArray.forEach(arr => { arr.forEach( num => {if (num % 2 === 0) console.log(num)})});// Problem 3

console.log(parityArray);// Problem 4

function findIntegers(arr) {
  let newArr = [];
  arr.forEach(ele => {if (Number.isInteger(ele)) newArr.push(ele)});
  return newArr;
};

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers);// Problem 5

function oddLengths(testArr) {
  let returnArr = [];
  
  returnArr = testArr.map(ele => ele.length);
  returnArr = returnArr.filter(ele => ele % 2 === 1);
  
  return returnArr;
};

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));// Problem 6

function sumOfSquares(testArr) {
  return testArr.reduce((acc, ele) => ele * ele + acc, 0);
};

let array = [3, 5, 7];
console.log(sumOfSquares(array));// Problem 7

function oddLengthsTwo(testArr) {
  return testArr.reduce((acc, ele) => {
    if (ele.length % 2 === 1) acc.push(ele.length);
    else;
    return acc;
  }, []);
};

arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengthsTwo(arr));// Problem 8

function doesThreeAppear(arr) {
  return arr.reduce((acc, ele) => {
    if (ele === 3 || acc) return true;
    else return false;
  }, false)
};

console.log(doesThreeAppear([1, 3, 5, 7, 9, 11]));// Problem 9
console.log(doesThreeAppear([]));// Problem 9
console.log(doesThreeAppear([2, 4, 6, 8]));// Problem 9

arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
console.log(arr);// Problem 10