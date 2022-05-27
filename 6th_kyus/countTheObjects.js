// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  
    let myArr = string.slice().split('')
      
     return myArr.reduce( (stack, value) => {
          return stack[value] ? stack[value]++ : stack[value] = 1, stack;
        }, {});
}

// with forEach
function count (string) {  
    var count = {};
    string.split('').forEach(s => {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }