// Make the sum() function return the sum of the values in the passed in array. 

function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    return array.reduce((a,b) => a + b, 0)
  }
  