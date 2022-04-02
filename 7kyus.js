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