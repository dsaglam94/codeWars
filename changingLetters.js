// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  let vowels = "aeoui";
  let res = "";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      res += string[i].toUpperCase();
    } else {
      res += string[i];
    }
  }
  return res;
}

// with regex
function swap(st) {
  return st.replace(/[aeiou]/g, (v) => v.toUpperCase());
}
