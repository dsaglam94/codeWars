// After calling the function findSum() with any number of non-negative integer arguments, it should return the sum of all those arguments. If no arguments are given, the function should return 0, if negative arguments are given, it should return -1.

// Example
// findSum(1,2,3,4); // returns 10 
// findSum(1,-2);    // returns -1 
// findSum();        // returns 0 
// Hint: research the arguments object on google or read Chapter 4 from Eloquent Javascript

function findSum(){
    let vals = Object.values(arguments)
    let isNegative = vals.some(num => num < 0)
    if (vals === []) {
      return 0
    } else if (isNegative) {
      return -1
    } else {
      return vals.reduce((acc, curr) => acc + curr,0)
    }
  }

// refactored one liner
function findSum(...nums) {
    return nums.reduce((a, b) => a < 0 || b < 0 ? - 1 : a + b, 0)
  }