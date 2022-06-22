// Count the number of exclamation marks and question marks, return the product.

// Examples
// Product("") == 0
// product("!") == 0
// Product("!ab? ?") == 2
// Product("!!") == 0
// Product("!??") == 2
// Product("!???") == 3
// Product("!!!??") == 6
// Product("!!!???") == 9
// Product("!???!!") == 9
// Product("!????!!!?") == 20

function product(string) {
  let countExclamationMark = 0;
  let countQuestionMark = 0;

  for (let mark of string) {
    if (mark === "!") {
      countExclamationMark++;
    } else if (mark === "?") {
      countQuestionMark++;
    }
  }
  return countExclamationMark * countQuestionMark;
}
