// 11.04.2022

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number){
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
  //       console.log(i)
        sum += i;
      } else if (i % 3 === 0) {
  //       console.log(i)
        sum += i;
      } else if (i % 5 === 0) {
  //       console.log(i)
        sum += i;
      }
    }
    
    return sum;
  }

//   Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

  function findOdd(arr) {
    return arr.find(item => arr.filter(el => el == item).length % 2 == 1)
  }

//   Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

  function spinWords(string){
    //   checking if the sentence has more than one word in it.
      if ( string.split(' ').length === 1 && string.length >= 5) {
        return string.split('').reverse().join('');
      }
    //   processing for the multiple words sentences
      let splittedStr = string.split(' ');
      
      for ( let i = 0; i < splittedStr.length; i++) {
        if ( splittedStr[i].length >= 5) {
         splittedStr[i] = splittedStr[i].split('').reverse().join('')
        }
      }
      
      return splittedStr.join(' ');
      
    }

    // diff solution
    function spinWords(words){
        return words.split(' ').map(function (word) {
          return (word.length > 4) ? word.split('').reverse().join('') : word;
        }).join(' ');
      }