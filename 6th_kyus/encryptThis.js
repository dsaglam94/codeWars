// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (text) => {
  let encrypted = "";
  const textArr = text.slice().split(" ");

  for (let i = 0; i < textArr.length; i++) {
    let temp = "";
    if (temp === "") {
      if (textArr[i].length === 2) {
        temp += textArr[i].charCodeAt(0) + textArr[i][1];
        encrypted += temp + " ";
        temp = "";
      } else if (textArr[i].length === 1) {
        temp += textArr[i].charCodeAt(0);
        encrypted += temp + " ";
        temp = "";
      } else {
        let len = textArr[i].length - 1;
        let secondLetter = textArr[i][1];
        let lastLetter = textArr[i][len];
        let remainingLetters = textArr[i].slice(2, len);

        let restOfWord = lastLetter + remainingLetters + secondLetter;

        temp += textArr[i].charCodeAt(0) + restOfWord;
        encrypted += temp + " ";
        temp = "";
      }
    }
  }
  return encrypted.trim();
};

// Cleaner and smarter solution
const encryptWord = (w) => {
  const first = w.charCodeAt(0);
  let res;
  switch (w.length) {
    case 0:
      return "";
    case 1:
      return first;
    case 2:
      res = [first, w[1]];
      break;
    case 3:
      res = [first, w[2], w[1]];
      break;
    default:
      res = [first, w.slice(-1), w.slice(2, -1), w[1]];
      break;
  }
  return res.join("");
};

const encryptThis1 = (text) => text.split(" ").map(encryptWord).join(" ");

// with RegEX
const encryptThis2 = (text) =>
  text
    .split(" ")
    .map((word) =>
      word
        .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
        .replace(/^\w/, word.charCodeAt(0))
    )
    .join(" ");
