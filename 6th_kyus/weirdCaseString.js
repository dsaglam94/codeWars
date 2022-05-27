// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

function toWeirdCase(string){
    let myStr = string.split(' ')
    console.log(myStr)
    let r = [];
    for (let i = 0; i < myStr.length; i++) {
      let temp = '';
      for(let j = 0; j < myStr[i].length; j += 2) {
        temp += myStr[i][j].toUpperCase();
        if(myStr[i][j+1]) {
        temp += myStr[i][j+1]  
        }
      }
      r.push(temp)
    }
    return r.join(' ')
}