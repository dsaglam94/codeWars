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

//       Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11 

function digital_root(n) {

    if ( n < 10) return n;

    let sum = 0;
    let numStr = String(n);

    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]);
    }

    return digital_root(sum);
}

//   diff solution
function digital_root(n) {
    return (n - 1) % 9 + 1;
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
}

// 12.04.2022

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
    if ( names.length === 0) {
      return `no one likes this`;
    } else if ( names.length === 1 ){
      return `${names} likes this`;
    } else if ( names.length === 2 ){
      return `${names[0]} and ${names[1]} like this`
    } else if ( names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

//   different solutions with object
function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }

//   different solution with switch
function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this'; break;
      case 1: return names[0] + ' likes this'; break;
      case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 

function createPhoneNumber(numbers){
    let first = numbers.slice(0,3).join('');
    let middle = numbers.slice(3,6).join('');
    let last = numbers.slice(6).join('');

    return `(${first}) ${middle}-${last}`

}

// great solution!
function createPhoneNumber(numbers){
    let format = "(xxx) xxx-xxxx";
    
    for(let i = 0; i < numbers.length; i++) {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}

//   You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(int){
    let even = int.filter( a => a % 2 == 0 );
    let odd = int.filter( a => a % 2 !== 0 );

    return even.length == 1 ? even[0] : odd[0];
}