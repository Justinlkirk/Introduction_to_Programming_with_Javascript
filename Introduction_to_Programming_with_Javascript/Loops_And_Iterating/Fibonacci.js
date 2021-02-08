function poorMansFibonacci(number) {
  let total, oneBack = 1, twoBack = 0;
  
  for (let i=2; i<=number; i++){
    total = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = total;
  }
  return total;
}// The way I would think to write this as a for loop


function fibonacci(number) {
  if (number < 2) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}// A much more concise way of writing the Fibonacci sequence utilizing recursion

console.log(fibonacci(6));// 8
console.log(fibonacci(20));// 6765
console.log(poorMansFibonacci(6));// 8
console.log(poorMansFibonacci(20));// 6765