// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

function removeEveryOther(arr){
    let result = [];
    for(let i = 0; i < arr.length; i+=2) {
      result.push(arr[i])
    }
    return result;
}

// ES6 solution
const removeEveryOther = arr => arr.filter((elem, index) => index % 2 === 0)