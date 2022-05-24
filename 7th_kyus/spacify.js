// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"

function spacify(str) {
    const r = str.split('').reduce((acc, curr) => {
      return acc + ' ' + curr
    })
      return r;
}

// diff simpler solution
function spacify(str) {
    return str.split("").join(" ");
  }