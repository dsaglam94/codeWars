// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str){
    if (str.length === 0) return str;
    let firstUpperCase = false;
    let res = "";
  
    if (str[0] === str[0].toUpperCase()) firstUpperCase = true;
  
    let arrStr = str.split(/-|_/)
  
    for (let i = 0; i < arrStr.length; i++) {
      if (i===0 && !firstUpperCase) {
        res += arrStr[i];
      } else {
        res += capitilizeFirstLetter(arrStr[i]);
      }
    }
    
    return res;
  }
  
  function capitilizeFirstLetter (string) {
    return string[0].toUpperCase() + string.slice(1)
  }

// refactored solution
function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}