// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
    let sorted = arr.sort((a,b) => a - b)
    if (sorted[0] < sorted[1]) {
      return sorted[0]
    } else {
      return sorted[sorted.length-1]
    }
  
}
  
// The code above works fine but it is not a good practice to use sort method
// The task is to find the unique value, not to change the original one. Arrays are usually passed "by reference" in many languages (in javascript it's nor purely by reference, although is similar to this case), so even when you get the proper result from the function, it has side effects outside its scope. I know that it's not specified in the description, but side effects should be avoided.

// Sorting has a penalty of performance, which derives in some inefficiency to process huge arrays when the unique value is placed in the first slots.

// refactored solution for better speed
function findUniq(arr) {
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ) return a;
    for( let x of arr ) if( x!=a ) return x
}