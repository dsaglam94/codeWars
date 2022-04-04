// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){

    let strNums = num.toString()
    
    let squaredNums = "";
    for (let i = 0; i < strNums.length; i++) {
      squaredNums += Math.pow(strNums[i], 2)
    }
    
    return Number(squaredNums);
    
  }

//   another option for the same problem

function squareDigits(num){
    return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
  }

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
      return newStr;
  };

//   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//   Examples
//   highAndLow("1 2 3 4 5");  // return "5 1"

  function highAndLow(numbers){
    let numsArr = numbers.split(' ').sort((a,b) => a - b);
    let highestNum = numsArr[numsArr.length - 1];
    let lowestNum = numsArr[0];
    let finalValue = highestNum.concat(' ',lowestNum);
    return finalValue;
  }

//   diff solution

function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }

//   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

  function descendingOrder(n){

    let newArr = [...''+n].sort((a,b) => b - a).join('');
    console.log(newArr)
    return Number(newArr.toString());
 
  }

//   This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

  function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

//   ou are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


  function getMiddle(s)
  {
   let position;
   let length;
    if (s.length % 2 === 0) {
       position = s.length / 2 - 1 ;
       length = 2;
    } else {
       position = Math.floor(s.length / 2 );
       length = 1;
    }
    return s.substring(position, position + length)
  }

console.log(  getMiddle('namesxnames'))


// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let newStrArr = [...str.toLowerCase()];
    let filteredNewStr = newStrArr.filter((item, index) => newStrArr.indexOf(item) == index);
 
   if ( filteredNewStr.length === newStrArr.length) {
       return true;
   } else { return false ; }
 }

//  Simple, given a string of words, return the length of the shortest word(s).

//  String will never be empty and you do not need to account for different data types.

 function findShort(s){
    let newArr = s.split(' ').map(x => x.length).sort((a,b) => a - b);
    return newArr[0];
  }


//   Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//   Example:
  
//   Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
//   Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

  String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
  };

//   Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// dnaStrand []        `shouldBe` []
// dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

  function DNAStrand(dna){
    let newStr = dna.split('').map(letter => {
      if ( letter === "A") {
        return "T"
      } else if ( letter === "T") {
        return "A"
      } else if ( letter === "G") {
        return "C"
      } else if ( letter === "C") {
        return "G"
      }
    })
    
    return newStr.join('');
  }


  // Your task is to write a function maskify, which changes all but the last four characters into '#'.

  // Examples
  // maskify("4556364607935616") == "############5616"
  // maskify(     "64607935616") ==      "#######5616"
  // maskify(               "1") ==                "1"
  // maskify(                "") ==                 ""

function maskify(cc) {
  let len = cc.length - 4;
  
  if ( cc.length < 4) {
    return cc;
  } else {
     let hashed = cc.split('').slice(0, len).fill('#').join('');
     let visiblePart = cc.slice(-4);
  
     return hashed + visiblePart
  } 
}

// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)


function getSum( a,b )
{
  let numArr = [a, b].sort((x,y) => x - y);
  let allNums = [];
  for (let i = numArr[0]; i <= numArr[1]; i++){
    allNums.push(i);
  }

  return allNums.reduce((x,y) => x + y,0)
}

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
  let sortedArr = numbers.sort((a,b) => a - b)
  console.log(sortedArr)
  let newArr = [];
    for (let i = 0; i < 2; i++) {
    newArr.push(sortedArr[i])
    }
    
   console.log(newArr.reduce((a,b) => a+b,0))
  }

  sumTwoSmallestNumbers([5, 8, 12, 19, 22])

//   Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

  function longest(s1, s2) {
    let computedArr = [...s1, ...s2]
    let filteredArr = computedArr.filter((item,index) => computedArr.indexOf(item) === index);
    return filteredArr.sort().join('')
    }

    // diff solution to same problem

    function longest(s1, s2) {
      return Array.from(new Set(s1 + s2)).sort().join('');
    }

    // diff solution
    const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

    function friend(friends){
      return friends.filter(friend => friend.length === 4) 
    }

//     To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

    function openOrSenior(data){
      let result = [];
      for (let i = 0; i < data.length; i++) {
    
            if (data[i][0] >= 55 && data[i][1] > 7) {
            result.push('Senior') 
          } else {
            result.push('Open') 
          }
    
      }
      return result;
    }

// diff solution

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {

  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return `${count}/${s.length}`;
}

// 04.04.2022 

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

// diff solution 
// return n*n*n

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D


var number = function(busStops){

  let peopleGetInto = 0;
  let peopleGetOff = 0;
  
  for (let i = 0; i < busStops.length; i++) {
    peopleGetInto += busStops[i][0];
    peopleGetOff += busStops[i][1];
  }
  
  return peopleGetInto - peopleGetOff;
  
}

// better solution?

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {

  let divisorNums = [];
  
  for ( let i = 2; i <= integer; i++) {
    if ( integer % i === 0) {
      divisorNums.push(i)
    }
  }
  if ( divisorNums.length === 1) {
    return `${integer} is prime`;
  } else if ( divisorNums.length > 1) {
    return divisorNums.slice(0, -1);
  }
  
};

// another solution 
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
  if ( array === [] || array == 0 ) { return 'even'}
  
  let sum = array.reduce((a,b) => a + b,0) 
  
  if ( sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

// even better ?

function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}