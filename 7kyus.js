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

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

    function friend(friends){
      return friends.filter(friend => friend.length === 4)
    }