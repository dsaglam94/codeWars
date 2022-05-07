// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

function bonusTime(salary, bonus) {
    let bonusValue = 10;
    if (bonus === true) {
      return `£${salary * bonusValue}`;
    } else {
      return '£' + salary;
    }
}

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

const DNAtoRNA = dna => dna.split('T').join('U');

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
}

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

const simpleMultiplication = number => (number % 2 === 0) ? (number * 8) : (number * 9)

// ou receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let avaragePoint = classPoints.reduce((a,b) => a+b,1) / (classPoints.length + 1)
    if ( yourPoints >= avaragePoint ) {
      return true;
    } else { return false; }
  }

//   Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.

// Examples (Input -> Output)
// * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134

//   const min = function(list){
    
//     return list.sort((a,b) => a - b)[0];
// }

// const max = function(list){
    
//     return list.sort((a,b) => b - a)[0];
// }
// Refactored version
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
    let count = [];
     for (let i = 1; i <= n; i++) {
       count.push(i);
     }
     return count;
   }


//    Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
    if ( name[0] === 'R' || name[0] === 'r' ) {
      return `${name} plays banjo`;
    } else {
      return `${name} does not play banjo`;
    }
  }

//   Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
    let newArr = x.map(num => Number(num));
    return newArr.reduce((a,b) => a+b,0);
  }

//   Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]

function countBy(x, n) {
    let z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}

// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi!!"

function remove (string) {
  let lastChar = string.length - 1
  if ( string[lastChar] === '!') {
    return string.slice(0, -1);
  } else {
    return string;
  }
}

// 07.05.2022

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if(dolphin){
    sharkSpeed /= 2;
  }
  return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]


function squareOrSquareRoot(array) {
  return array.map(x => {
    const r = Math.sqrt(x);
    return (r % 1 == 0) ? r : (x*x);
  });  
}

// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b){
  // If a character is not a letter then the cases will match each other
  if (a.toLowerCase() === a.toUpperCase() || b.toLowerCase() === b.toUpperCase()) {
    return -1;
  }
  return (a.toLowerCase() === a) === (b.toLowerCase() === b) ? 1 : 0;
}

// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}