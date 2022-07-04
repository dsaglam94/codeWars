// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. Output should be the length of the longest word, as a number.

// There will only be one 'longest' word.

function findLongest(str) {
  let splitted = str.split(" ");
  let longest = 0;

  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i].length > longest) {
      longest = splitted[i].length;
    }
  }
  return longest;
}
