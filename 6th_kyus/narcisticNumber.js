// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcisstic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
//  return boolean

function narcissistic(value) {
    let len = String(value).length
    let stringifiedNumber = String(value)
    let res = 0
    for (let i = 0; i < len; i++) {
      const num = stringifiedNumber[i]
      res += Math.pow(num, len)
    }
    return value === res 
}

// refacotered
function narcissistic( value ) {
    return String(value).split('').reduce((p, c) => {
      return p + Math.pow(c, String(value).length)
      }, 0) == value;
  }
  