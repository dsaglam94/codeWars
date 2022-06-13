// Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

// removeVowels("drake") // => "drk"
// removeVowels("aeiou") // => ""

const removeVowels = (str) => {
  let myRegex = /[^aeuio]/gi;
  let res = str.match(myRegex);

  return res !== null ? res.join("") : "";
};

// or
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}
