// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array){
    let myArr = array.slice().map(el => el.charCodeAt(0))
    for (let i = 0; i < myArr.length; i++) {
      if(myArr[i+1] > (myArr[i] + 1)) {
        return String.fromCharCode(myArr[i]+1) 
      }
    }
}

// diff approach
function findMissingLetter(array) {
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")
}