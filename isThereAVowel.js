// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  for (let i = 0; i < a.length; ++i) {
    let char = String.fromCharCode(a[i]);
    if ("aeiou".indexOf(char) !== -1) a[i] = char;
  }

  return a;
}
