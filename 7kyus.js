// // Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// // For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// // Note: The function accepts an integer and returns an integer

// function squareDigits(num){

//     let strNums = num.toString()
    
//     let squaredNums = "";
//     for (let i = 0; i < strNums.length; i++) {
//       squaredNums += Math.pow(strNums[i], 2)
//     }
    
//     return Number(squaredNums);
    
//   }

// //   another option for the same problem

// function squareDigits(num){
//     return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
    
//   }

// //   Trolls are attacking your comment section!

// // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// // Your task is to write a function that takes a string and return a new string with all vowels removed.

// // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// // Note: for this kata y isn't considered a vowel.

// const disemvowel = (str) => {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let newStr = '';
//     for (let i = 0; i <= str.length; i++) {
//       let char = str.charAt(i);
//       if (vowels.indexOf(char) == -1) {
//         newStr += char;
//       }
//     }
//       return newStr;
//   };

// //   In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// //   Examples
// //   highAndLow("1 2 3 4 5");  // return "5 1"

//   function highAndLow(numbers){
//     let numsArr = numbers.split(' ').sort((a,b) => a - b);
//     let highestNum = numsArr[numsArr.length - 1];
//     let lowestNum = numsArr[0];
//     let finalValue = highestNum.concat(' ',lowestNum);
//     return finalValue;
//   }

// //   diff solution

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

// //   Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// // Examples:
// // Input: 42145 Output: 54421

//   function descendingOrder(n){

//     let newArr = [...''+n].sort((a,b) => b - a).join('');
//     console.log(newArr)
//     return Number(newArr.toString());
 
//   }

// //   This time no story, no theory. The examples below show you how to write function accum:

// // Examples:
// // accum("abcd") -> "A-Bb-Ccc-Dddd"
// // accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

//   function accum(s) {
//     return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
//   }

// //   ou are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// // #Examples:

// // Kata.getMiddle("test") should return "es"

// // Kata.getMiddle("testing") should return "t"

// // Kata.getMiddle("middle") should return "dd"

// // Kata.getMiddle("A") should return "A"


//   function getMiddle(s)
//   {
//    let position;
//    let length;
//     if (s.length % 2 === 0) {
//        position = s.length / 2 - 1 ;
//        length = 2;
//     } else {
//        position = Math.floor(s.length / 2 );
//        length = 1;
//     }
//     return s.substring(position, position + length)
//   }

// console.log(  getMiddle('namesxnames'))


// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// // Example: (Input --> Output)

// // "Dermatoglyphics" --> true
// // "aba" --> false
// // "moOse" --> false (ignore letter case)

// function isIsogram(str){
//     let newStrArr = [...str.toLowerCase()];
//     let filteredNewStr = newStrArr.filter((item, index) => newStrArr.indexOf(item) == index);
 
//    if ( filteredNewStr.length === newStrArr.length) {
//        return true;
//    } else { return false ; }
//  }

// //  Simple, given a string of words, return the length of the shortest word(s).

// //  String will never be empty and you do not need to account for different data types.

//  function findShort(s){
//     let newArr = s.split(' ').map(x => x.length).sort((a,b) => a - b);
//     return newArr[0];
//   }


// //   Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// //   Example:
  
// //   Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// //   Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//   String.prototype.toJadenCase = function () {
//     return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join(' ');
//   };

// //   Example: (input --> output)

// // "ATTGC" --> "TAACG"
// // "GTAT" --> "CATA"
// // dnaStrand []        `shouldBe` []
// // dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
// // dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
// // dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]

//   function DNAStrand(dna){
//     let newStr = dna.split('').map(letter => {
//       if ( letter === "A") {
//         return "T"
//       } else if ( letter === "T") {
//         return "A"
//       } else if ( letter === "G") {
//         return "C"
//       } else if ( letter === "C") {
//         return "G"
//       }
//     })
    
//     return newStr.join('');
//   }


//   // Your task is to write a function maskify, which changes all but the last four characters into '#'.

//   // Examples
//   // maskify("4556364607935616") == "############5616"
//   // maskify(     "64607935616") ==      "#######5616"
//   // maskify(               "1") ==                "1"
//   // maskify(                "") ==                 ""

// function maskify(cc) {
//   let len = cc.length - 4;
  
//   if ( cc.length < 4) {
//     return cc;
//   } else {
//      let hashed = cc.split('').slice(0, len).fill('#').join('');
//      let visiblePart = cc.slice(-4);
  
//      return hashed + visiblePart
//   } 
// }

// // Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// // Note: a and b are not ordered!

// // Examples (a, b) --> output (explanation)
// // (1, 0) --> 1 (1 + 0 = 1)
// // (1, 2) --> 3 (1 + 2 = 3)
// // (0, 1) --> 1 (0 + 1 = 1)
// // (1, 1) --> 1 (1 since both are same)


// function getSum( a,b )
// {
//   let numArr = [a, b].sort((x,y) => x - y);
//   let allNums = [];
//   for (let i = numArr[0]; i <= numArr[1]; i++){
//     allNums.push(i);
//   }

//   return allNums.reduce((x,y) => x + y,0)
// }

// // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// // [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {  
//   let sortedArr = numbers.sort((a,b) => a - b)
//   console.log(sortedArr)
//   let newArr = [];
//     for (let i = 0; i < 2; i++) {
//     newArr.push(sortedArr[i])
//     }
    
//    console.log(newArr.reduce((a,b) => a+b,0))
//   }

//   sumTwoSmallestNumbers([5, 8, 12, 19, 22])

// //   Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// // Examples:
// // a = "xyaabbbccccdefww"
// // b = "xxxxyyyyabklmopq"
// // longest(a, b) -> "abcdefklmopqwxy"

// // a = "abcdefghijklmnopqrstuvwxyz"
// // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

//   function longest(s1, s2) {
//     let computedArr = [...s1, ...s2]
//     let filteredArr = computedArr.filter((item,index) => computedArr.indexOf(item) === index);
//     return filteredArr.sort().join('')
//     }

//     // diff solution to same problem

//     function longest(s1, s2) {
//       return Array.from(new Set(s1 + s2)).sort().join('');
//     }

//     // diff solution
//     const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

//     function friend(friends){
//       return friends.filter(friend => friend.length === 4) 
//     }

// //     To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// // Input
// // Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// // Output
// // Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// // Example
// // input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// // output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//     function openOrSenior(data){
//       let result = [];
//       for (let i = 0; i < data.length; i++) {
    
//             if (data[i][0] >= 55 && data[i][1] > 7) {
//             result.push('Senior') 
//           } else {
//             result.push('Open') 
//           }
    
//       }
//       return result;
//     }

// // diff solution

// // Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// // Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }

// // The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// // Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// // You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// // The string has a length greater or equal to one and contains only letters from ato z.

// // Examples:
// // s="aaabbbbhaijjjm"
// // printer_error(s) => "0/14"

// // s="aaaxbbbbyyhwawiwjjjwwm"
// // printer_error(s) => "8/22"

// function printerError(s) {

//   let count = 0;
//   for(let i = 0; i < s.length; i++) {
//     if (s[i] > "m") {
//       count++;
//     }
//   }
//   return `${count}/${s.length}`;
// }

// // 04.04.2022 

// // Given the triangle of consecutive odd numbers:

// //              1
// //           3     5
// //        7     9    11
// //    13    15    17    19
// // 21    23    25    27    29
// // ...
// // Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// // 1 -->  1
// // 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// // diff solution 
// // return n*n*n

// // You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// // Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D


// var number = function(busStops){

//   let peopleGetInto = 0;
//   let peopleGetOff = 0;
  
//   for (let i = 0; i < busStops.length; i++) {
//     peopleGetInto += busStops[i][0];
//     peopleGetOff += busStops[i][1];
//   }
  
//   return peopleGetInto - peopleGetOff;
  
// }

// // better solution?

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// // Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// // Example:
// // divisors(12); // should return [2,3,4,6]
// // divisors(25); // should return [5]
// // divisors(13); // should return "13 is prime"

// function divisors(integer) {

//   let divisorNums = [];
  
//   for ( let i = 2; i <= integer; i++) {
//     if ( integer % i === 0) {
//       divisorNums.push(i)
//     }
//   }
//   if ( divisorNums.length === 1) {
//     return `${integer} is prime`;
//   } else if ( divisorNums.length > 1) {
//     return divisorNums.slice(0, -1);
//   }
  
// };

// // another solution 
// function divisors(integer) {
//   var res = []
//   for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
//   return res.length ? res : integer + ' is prime'
// };

// // Task:
// // Given a list of integers, determine whether the sum of its elements is odd or even.

// // Give your answer as a string matching "odd" or "even".

// // If the input array is empty consider it as: [0] (array with a zero).

// // Examples:
// // Input: [0]
// // Output: "even"

// // Input: [0, 1, 4]
// // Output: "odd"

// // Input: [0, -1, -5]
// // Output: "even"


// function oddOrEven(array) {
//   if ( array === [] || array == 0 ) { return 'even'}
  
//   let sum = array.reduce((a,b) => a + b,0) 
  
//   if ( sum % 2 === 0) {
//     return 'even';
//   } else {
//     return 'odd';
//   }
// }

// // even better ?

// function oddOrEven(arr) {
//   return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
// }

// // 05.04.2022

// // Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// // Examples
// // "This is an example!" ==> "sihT si na !elpmaxe"
// // "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   return str.split(' ').map(word => word.split('')
//                                         .reverse()
//                                         .join(''))
//                                         .join(' ');
// }

// // Task
// // Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// // Don't change the order of the elements that are left.

// // Examples
// // * Input: [1,2,3,4,5], output= [2,3,4,5]
// // * Input: [5,3,2,1,4], output = [5,3,2,4]
// // * Input: [2,2,1,2,1], output = [2,2,2,1]

// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }

// // 06.04.2022

// // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// // Examples:

// // solution('abc', 'bc') // returns true
// // solution('abc', 'd') // returns false

// function solution(str, ending){
//   return str.endsWith(ending);
// }

// // Task:
// // Your task is to write a function which returns the sum of following series upto nth term(parameter).

// // Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// // Rules:
// // You need to round the answer to 2 decimal places and return it as String.

// // If the given value is 0 then it should return 0.00

// // You will only be given Natural Numbers as arguments.

// // Examples:(Input --> Output)
// // 1 --> 1 --> "1.00"
// // 2 --> 1 + 1/4 --> "1.25"
// // 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// function SeriesSum(n, s = 0) {
//   for (let i = 0; i < n; i++) {
//     s += 1 / (1 + i * 3)
//   }
  
//   return s.toFixed(2)
// }

// // Task
// // Write a function that returns both the minimum and maximum number of the given list/array.

// // Examples
// // minMax([1,2,3,4,5])   == [1,5]
// // minMax([2334454,5])   == [5, 2334454]
// // minMax([1])           == [1, 1]

// function minMax(arr){
//   let resultArr = [];
//   resultArr.push(Math.min(...arr))
//   resultArr.push(Math.max(...arr))
//   return resultArr;
  
// }

// // diff solution better?
// function minMax(arr){
//   return [Math.min(...arr), Math.max(...arr)];
// }

// // Write a function which takes a list of strings and returns each line prepended by the correct number.

// // The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// // Examples:

// // number([]) // => []
// // number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

// const number = function(array){

//   let res = [];
  
//   for (let i = 0; i < array.length; i++) {
//     res.push(`${i+1}: ${array[i]}`)
//   }
//   return res;
// }

// // diff solution with map
// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

// // In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// // Examples:

// // 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// // 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// // The result may contain fives. ;-)
// // The start number will always be smaller than the end number. Both numbers can be also negative!

// function dontGiveMeFive(start, end) {
//   let count = 0;

//   for (let i = start; i <= end; i++)
//       if (!i.toString().includes("5"))
//           count++;

//   return count;
// }

// // You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// // Complete the method which accepts such an array, and returns that single different number.

// // The input array will always be valid! (odd-length >= 3)

// // Examples
// // [1, 1, 2] ==> 2
// // [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {

//   let sortedNums = numbers.sort((a,b) => a - b)
  
//   if (sortedNums[0] !== sortedNums[1]) {
//   return sortedNums[0]
//   } else {
//   return sortedNums[sortedNums.length - 1]
//   }

// }

// // or example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

// // If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.


// function breakChocolate(n,m) {
//   if ((n * m) === 0) {
//     return 0;
//   } else {
//   return (n * m) - 1;    
//   }
// }

// // Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000.

// // Examples (input --> output)
// // 4 --> 3 (1, 2, 4)
// // 5 --> 2 (1, 5)
// // 12 --> 6 (1, 2, 3, 4, 6, 12)
// // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

// function getDivisorsCnt(n){
//   let res = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       res.push(i)
//     }
//   }
//   return res.length;
// }

// // As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// // The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// // For example:

// // gimme([2, 3, 1]) => 0
// // 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// // Another example (just to make sure it is clear):

// // gimme([5, 10, 14]) => 1
// // 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// function gimme (triplet) {

//   let duplicateTriplet = [...triplet];
//   let sortedTriplet = duplicateTriplet.sort((a,b) => a - b)

//   return triplet.indexOf(sortedTriplet[1])
// }

// // 08.03.2022

// // a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// // The four operators are "add", "subtract", "divide", "multiply".

// // A few examples:(Input1, Input2, Input3 --> Output)

// // 5, 2, "add"      --> 7
// // 5, 2, "subtract" --> 3
// // 5, 2, "multiply" --> 10
// // 5, 2, "divide"   --> 2.5

// function arithmetic(a, b, operator){

//   switch(operator) {
   
//       case 'add':
//          return a + b;
//          break;
//       case 'subtract':
//          return a - b;
//          break;
//       case 'multiply':
//          return a * b;
//          break;
//       case 'divide':
//          return a / b;
//          break;
//   }
//  }

// //  diff solution
// function arithmetic(a, b, operator){
//   optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
//   return eval(a + optable[operator] + b); 
// }

// // Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// // For example, if this array were passed as an argument:

// // ["Telescopes", "Glasses", "Eyes", "Monocles"]

// // Your function would return the following array:

// // ["Eyes", "Glasses", "Monocles", "Telescopes"]


// function sortByLength (array) {
//   return array.sort((a,b) => a.length - b.length);
// };

// // The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// function twoOldestAges(ages){

//   return ages.sort((a,b) => a - b).slice(-2)
  
// }

// // Create a function that returns the name of the winner in a fight between two fighters.

// // Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// // Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// // Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// // function Fighter(name, health, damagePerAttack) {
// //   this.name = name;
// //   this.health = health;
// //   this.damagePerAttack = damagePerAttack;
// //   this.toString = function() { return this.name; }
// // }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//   let fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
//   let fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
//   if(fac1 < fac2) {
//     return fighter2.name;
//   } else if(fac2 < fac1) {
//     return fighter1.name;
//   } else {
//     return firstAttacker;
//   }
// }

// // Upto and including n, this function will return the sum of all multiples of 3 and 5.

// // For example:

// // findSum(5) should return 8 (3 + 5)

// // findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)



// function findSum(n) {

//   let sum = 0;
  
//   for ( let i = 1; i <= n; i++ ) {
//     if ( i % 3 === 0 || i % 5 === 0 ) {
//     sum += i
//     }
//   }
//   return sum;
// }

// // The parameters (divisor, bound) passed to the function are only positive values .
// // It's guaranteed that a divisor is Found .
// // Input >> Output Examples
// // maxMultiple (2,7) ==> return (6)
// // Explanation:
// // (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

// function maxMultiple(divisor, bound){

//   let divisors = [];

//   for (let i = 1; i <= bound; i++) {
//     if ( i % divisor === 0 ) {
//       divisors.push(i);
//     }
//   }
//   return divisors[divisors.length - 1]
// }

// // Note: anagrams are case insensitive

// // Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// // Examples
// // "foefet" is an anagram of "toffee"

// // "Buckethead" is an anagram of "DeathCubeK"

// // write the function isAnagram

// var isAnagram = function(test, original) {
  
//   return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
    
//   };

// //   In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// // Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

//   function factorial(n) {
//   let result = 1;
  
//   if ( n > 12 || n < 0 ) {
//     throw new RangeError();
//   } else {
//     for (let i = 1; i <= n; i++) {
//     result *= i;  
//   }   
//      return result;
//   }
// }

// // refactored version
// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
  
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

function sumDigits(number) {
  number = Math.abs(number);
  let numsArr = (number.toString().split(''))

  let result = 0;
  numsArr.forEach(number => {
    result += parseFloat(number);
  })
  
  return result
}

// 09.04.2022

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {

  let capitals = [];
  for(let i = 0; i < word.length; i++) {
  
    if (word[i].toUpperCase() === word[i]) {
      capitals.push(i)
    }
  }
  return capitals;
};

// diff solution

var capitals = function (word) {
  return word.split('').reduce(function(memo, v, i) {
    return v === v.toUpperCase() ? memo.concat(i) : memo;
  }, []);
};

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

function checkExam(array1, array2) {
  let result = 0; 
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i] ) {
      result += 4;
    } else if (array2[i] === '') {
      result += 0;
    } else {
      result -= 1;
    }  
  }
  
  if (result < 0) { return 0 }
  else { return result }
}

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

function smallEnough(a, limit){
  return a.every(a => (a <= limit))
}

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)

function minValue(values){
  let filteredValues = [...new Set(values)]
  return parseFloat(filteredValues.sort((a,b) => a - b).join(''));
}

// diff solution / refactored

function minValue(values){
  let arr = Array.from(new Set(values))
  return parseInt(arr.sort().join(''))
}

// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

function solve(s){
  let sArr = s.split('')
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) {
      count ++
    }
  }
  
  if ( count <= (s.length / 2)) { return s.toLowerCase()}
  else { return s.toUpperCase()}
  
}

// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]


function solve(arr) {

  return arr.filter((num, index) => arr.lastIndexOf(num) === index) 
  
}

// 10.04.2022

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  let hashIndex = url.indexOf('#')
  
  if (hashIndex > 0) {
     return url.split('').slice(0, hashIndex).join('')
  } else {
     return url
  }
 }

//  definitely smarter solution
function removeUrlAnchor(url){
  return url.split('#')[0];
}

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
  let evenIndexArr = []
  let oddIndexArr = []

  for ( let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      evenIndexArr.push(s[i].toUpperCase())
      evenIndexArr.push(s[i+1])
    } else if (i % 1 === 0) {
      oddIndexArr.push(s[i].toUpperCase())
      oddIndexArr.push(s[i+1])
      
    }
  }
  
  let evenStr = evenIndexArr.join("");
  let oddStr = s[0] + oddIndexArr.join("");

  
  return [evenStr, oddStr]
};

// different solution

function capitalize(s){
  const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
  const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
  return [even, odd];
};

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

// Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map(str => str.length)
  let l2 = a2.map(str => str.length)
  return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
}

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  if ( nums === null ) {
    return [];
  } else {
    return nums.sort((a,b) => a - b)
  }
}

// our task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Input:
// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:
// 'alpha beta gamma delta'

// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

function removeDuplicateWords (s) {
  
  let str = [...new Set(s.split(' '))].join(' ')
  return str;

}

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
  
//   if ( enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)) {
//     return true;
//   } else {
//     return false;
//   }
  
//   let date1 = new Date(currentDate)
//   let date2 = new Date(expirationDate)
  
//   console.log(date1 <= date2)
}

// 11.04.2022

// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]
// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

const sumOfMinimums = arr => {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
      sum += Math.min(...arr[i])
  }
  
  return sum;
}

// diff solution
function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

function rowWeights(array){
  let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
  let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
  return [t1, t2]
}

// diff solution

function rowWeights(array){
  let arr = [0, 0];
  for (let i = 0; i < array.length; i++) {
    i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
  }
  return arr;
}

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

function flattenAndSort(array) {
  if (array.length > 0) {
    let newArr = Array.prototype.concat(...array);
    
    return newArr.sort((a,b) => a - b);

  } else {
    return [];
  }
}

// diff solution
function flattenAndSort(array) {
  return [].concat(...array).sort((a,b) => a - b);
}

// diff solution
function flattenAndSort(array) {
  return array
    .reduce((result, current) => [...result, ...current],[])
    .sort((a, b) => a - b)
    ;
}

// Your task is to write function factorial.
function factorial(n){
  let result = 1;
  for (let i = 1; i <= n; i++) {
    
    result *= i
    
  }
  return result;
}
// diff solution
const factorial = n => n ? factorial(n - 1) * n : 1;

// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

const sumAngle = n => (n - 2) * 180;

// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array){
  let ans;
  if (array[1] > array[0]){
    ans = "yes, ascending";
  }

  if (ans==="yes, ascending"){
      for (let i = 1; i<array.length; i++){
      if(array[i]>= array[i-1]){
        ans = "yes, ascending";
      } else return ans = "no";
    }
  }
  if (ans!=="yes, ascending"){
      for (let i = 1; i<array.length; i++){
      if(array[i]<= array[i-1]){
        ans = "yes, descending";
      } else return ans = "no";
    }   
  }
  return ans;
}

// Create a function that takes an array of letters, and combines them into words in a sentence.

// Examples:
// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

function arrAdder(arr) {
  let result = [];
  for ( let i = 0; i < arr[0].length; i++) {
    for( let j = 0; j <arr.length; j++) {
      result.push(arr[j][i]);
    }
    result.push(' ')
  }
  return result.join('').trim();
}
// 12.04.2022

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

const noOdds = values => values.filter(num => num % 2 === 0)

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

function fizzbuzz(n)
{
  let res = [];
  for(let i = 1; i <= n; i++) {
    if ( i%3 === 0 && i%5 === 0 ) { res.push('FizzBuzz') }
    else if ( i%3 === 0 ) { res.push('Fizz') }
    else if ( i%5 === 0 ) { res.push('Buzz') }
    else { res.push(i)}
  }
  return res;
}

// Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0)
}

// 13.04.2022

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"

function repeater(string, n){
  let rStr = '';
  for (let i = 1; i <= n; i++) {
    rStr += string
  }
  
  return rStr;
}

// diff solution
const repeater = (string, n) => string.repeat(n);

// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

const isPowerOfTwo = n => Number.isInteger(Math.log2(n)) ;

// diff solution with recursion
function isPowerOfTwo(n){
  if(n == 1)
    return true
  if(n < 1)
    return false

 return isPowerOfTwo(n / 2)

}

// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ageArr = [age1,age2,age3,age4,age5,age6,age7,age8]
  
  let multipledReducedAges = ageArr.map(num => num * num).reduce((a,b) => a + b, 0);
  return Math.floor(Math.sqrt(multipledReducedAges) / 2)
  
  
}

// Create a function add(n)/Add(n) which returns a function that always adds n to any number

// Note for Java: the return type and methods have not been provided to make it a bit more challenging.

// var addOne = add(1);
// addOne(3); // 4

// var addThree = add(3);
// addThree(3); // 6

function add(n) {
  return function (m) {
    return n+m;
  }
}

// 14.04.2022

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
  return array.sort((a,b) => (b + '').length - (a + '').length)[0]
}

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

function countDevelopers(list) {
  let count = 0;

  list.forEach(item => {
  if ( item.continent === 'Europe' && item.language === 'JavaScript' ) {
    count += 1
     }
  });
  return count;
}

// diff solution with filter function
const countDevelopers = list => list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length;

// Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

// If the input number is already a palindrome, the number of steps is 0.

// All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.

// Example
// For example, start with 87:

//   87 +   78 =  165     - step 1, not a palindrome
//  165 +  561 =  726     - step 2, not a palindrome
//  726 +  627 = 1353     - step 3, not a palindrome
// 1353 + 3531 = 4884     - step 4, palindrome!
// 4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.

var palindromeChainLength = function(n) {
  let step = 1;
  let reversedNum = reverseNum(n);
  
  if ( n === reversedNum || n === 1 ) {
    return 0;
  }
  
  let res = n + reversedNum;
  
  while(res !== reverseNum(res) ){
    step += 1;
    res += reverseNum(res)
  }

  return step;
  
  function reverseNum (x) {
    return Number([...(x+'')].reverse().join(''));
  }

};

// diff solution with recursive 

var palindromeChainLength  = function(n) {  
  var x = parseInt( (""+n).split('').reverse().join('') );
  if(n != x){
    return 1 + palindromeChainLength (n + x);
  }
  return 0;
};

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

// Input >> Output Examples
// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

function adjacentElementsProduct(array) {
  
  let newArr = []
  
  for(let i = 0; i < array.length-1; i++){
    newArr.push(array[i]*array[i+1])
    console.log(newArr)
  }  
  
  return Math.max(...newArr)
}

// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:
// > 6
// Output:
// 0+1+2+3+4+5+6 = 21
// Input:
// > -15
// Output:
// -15<0
// Input:
// > 0
// Output:
// 0=0

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = 0;
    var str = "";
    if (count === 0) {
      return "0=0";
    } else if (count < 0) {
      return count + "<0";
    } else {
      for (var i = 0; i < count; i++) {
        sum += i;
        str += i + "+";
      };
    sum += count;
    str += count + " = " + sum;
    return str;
    };
  };

  return SequenceSum;

})();

// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".

function bump(x){
  let arr = x.split('');
  let bumps = 0;
  
  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === 'n' ) {
      bumps++;
    }
  }
  if ( bumps > 15 ) {
    return "Car Dead";
  } else {
    return "Woohoo!";
  }
}

// better solution
const bump = x => x.split('n').length > 16 ? "Car Dead" : "Woohoo!"

// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {

  let sortedNums = numbers.sort((a,b) => b - a);
  return sortedNums[0] + sortedNums[1]
}

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// Examples of returns in different languages:
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [["az", "toto picaro zone kiwi"], ["az toto", "picaro zone kiwi"], ["az toto picaro", "zone kiwi"], ["az toto picaro zone", "kiwi"]] 
// or
//  a = {"az", "toto", "picaro", "zone", "kiwi"} -->
// {{"az", "toto picaro zone kiwi"}, {"az toto", "picaro zone kiwi"}, {"az toto picaro", "zone kiwi"}, {"az toto picaro zone", "kiwi"}}
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or 
// a = [|"az", "toto", "picaro", "zone", "kiwi"|] -->
// [("az", "toto picaro zone kiwi"), ("az toto", "picaro zone kiwi"), ("az toto picaro", "zone kiwi"), ("az toto picaro zone", "kiwi")]
// or
// a = ["az", "toto", "picaro", "zone", "kiwi"] -->
// "(az, toto picaro zone kiwi)(az toto, picaro zone kiwi)(az toto picaro, zone kiwi)(az toto picaro zone, kiwi)"

function partlist(arr) {
  var newArray;
  var returnArray=[];
  for( var i=1; i<arr.length; i++){
    newArray = [];
    newArray.push(arr.slice(0,i).join(" "));
    newArray.push(arr.slice(i).join(" "));
    returnArray.push(newArray);
  }
  
  return returnArray;
}

// 15.04.2022

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
  if(n === 1) return n;
  return n + halvingSum(Math.floor(n/2));
}
// diff solution
function halvingSum(n) {
  let sum = 0;
  while(n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }
  return sum;
}

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

const greet = function(name) {
  let firstLetterCap = name.slice(0,1).toUpperCase();
  let remainingLetters = name.slice(1).toLowerCase();
  return `Hello ${firstLetterCap}${remainingLetters}!`
};

// Input >> Output Examples
// minSum({5,4,2,3}) ==> return (22) 
// Explanation:
// The minimum sum obtained from summing each two integers product , 5*2 + 3*4 = 22

const minSum = arr =>
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

//   Write a function that takes a positive integer n, sums all the cubed values from 1 to n, and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

  function sumCubes(n){
    if (n === 1) return 1;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += Math.pow(i,3);
    }
    return sum;
  } 

//   If num is negative, ignore its sign and treat it as a positive value
// If nth is not positive, return -1
// Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
// Examples(num, nth --> output)
// 5673, 4 --> 5
// 129, 2 --> 2
// -2825, 3 --> 8
// -456, 4 --> 0
// 0, 20 --> 0
// 65, 0 --> -1
// 24, -8 --> -1

var findDigit = function(num, nth){
  let numArr = [...String(num)];
  
  if ( nth <= 0 ) { return -1 }
  
  if ( num <= 0 ) {
    numArr = numArr.slice(1);
    if ( numArr.length < nth ) {
      return 0;
    }
  }
  
  
  return +numArr.reverse()[nth-1]
  
}

// Arthur needs you to return true if he needs to invite more women or false if he is all set.

// Input/Output
// [input] integer array L ($a in PHP)
// An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

// 2 <= L.length <= 50

// [output] a boolean value

// true if Arthur need to invite more women, false otherwise.

function inviteMoreWomen(L) {

  let countMen = 0;
  let countWomen = 0;
  
  for (let i = 0; i < L.length; i++) {
      if ( L[i] === -1 ) {
        countWomen++;
      } else {
        countMen++;
      }
  }
  
  if ( countWomen < countMen ) {
    return true;
  } else {
    return false;
  }
}

// smarter solution
function inviteMoreWomen(L) {
  return L.reduce((a,b) => a+b) > 0;
}

// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.

function digits(n) {
  return String(n).length;
}

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  arr = arr.filter((num) => {return num % 2 != 0});
  arr = arr.reduce((a, b) => a + Math.pow(b, 3), 0);
  return isNaN(arr) ? undefined : arr;
}
// differen solution
function cubeOdd(arr) {
  var sum = 0;
  for (var i = 0; i <arr.length; i++){
    var cubed = (arr[i]*arr[i]*arr[i]);
    if (isNaN(cubed)) return undefined;
    if(cubed % 2 != 0 )sum += cubed;
  }
  return sum;
}

// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

function isLeapYear(year) {
  
  if ( year % 4 === 0 && !(year % 100 === 0) ) {
    return true;
  } else if ( year % 4 === 0 && year % 400 === 0 ) {
    return true;
  } else if ( year % 100 !== 0 ) {
    return false;
  } else if ( year % 100 === 0 ) {
    return false;
  } else if ( year % 400 === 0 ){
    return true;
  } 
//   console.log(2000%400)
}

// diff solution 
function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

// 16.04.2022

// If the number has an odd number of digits then there is only one middle digit, e.g. 92645 has middle digit 6; otherwise, there are two middle digits , e.g. 1301 has middle digits 3 and 0

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g 413023 is a balanced number because the left sum and right sum are both 5.

// Number passed is always Positive .

// Return the result as String

// Input >> Output Examples
// (balanced-num 7) ==> return "Balanced"

function balancedNum(number) {
  let numstr = number.toString();
  let leftside = "";
  let rightside = "";
  if (numstr.length/2 < 1 || numstr.length === 2) { 
    return "Balanced";
  }
  if (numstr.length % 2 === 0) {
    leftside = numstr.slice(0,numstr.length/2-1);
  } else {
    leftside = numstr.slice(0,numstr.length/2);
  }
  rightside = numstr.slice(numstr.length/2+1);
  
  let lefttotal = leftside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  let righttotal = rightside.split("").reduce((a,b)=>parseInt(a)+parseInt(b));
  return (lefttotal === righttotal) ? "Balanced" : "Not Balanced";
  }

//   I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

  function generateShape(integer){
    let sum = '';
    
    for ( let i = 1; i <= integer; i++ ){
      for ( let j = 1; j <= integer; j++ ){
        sum += '+'
      }
      sum += '\n'
    }
    return sum.slice(0,-1);
  }

  // diff solution
  function generateShape(n){
    return ("+".repeat(n)+"\n").repeat(n).trim()
  }

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you have, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

  function foldTo(distance) {
    let paper = 0.0001;
    let folds = 0;
    if (distance <= 0) {
      return null;
    } else {
      while ( distance > paper ) {
        paper *= 2;
        folds += 1;
      }
    }
    return folds;
  }

//   Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

  let hasUniqueChars = (str) => new Set(str).size === str.length;

//   menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
// Explanation:
// Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }

// Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .

  function menFromBoys(arr){
    let filteredArr = [...new Set(arr)].sort((a,b) => a - b);
  //   console.log(filteredArr)
    let sortedArr = [];
    
    for ( let i = 0; i < filteredArr.length; i++ ) {
      if ( filteredArr[i] % 2 === 0 ) {
        sortedArr.push(filteredArr[i])
      }
    }
    
    for ( let j = filteredArr.length-1; j >= 0; j-- ) {
      if ( filteredArr[j] % 2 !== 0 ) {
        sortedArr.push(filteredArr[j])
      }
    }
    return sortedArr;
  }

//   Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}


  function count(array){
    return array.reduce(function (stack, value) {
      return stack[value] ? stack[value]++ : stack[value] = 1, stack;
    }, {});
  }