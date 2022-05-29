// Given a varying number of integer arguments, return the digits that are not present in any of them.

// Example:

// [12, 34, 56, 78]  =>  "09"
// [2015, 8, 26]     =>  "3479"
// Note: the digits in the resulting string should be sorted.

function unusedDigits() {
    let arr = [...arguments].map(String).join('')
  //   console.log(arr)
    let result = ''
    for(let i = 0; i < 10; i++) {
      if(!arr.includes(i)){
        result += i
      }
    }
    return result
}