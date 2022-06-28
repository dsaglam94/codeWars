// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

// Task
// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n) {
  let arr = [];

  if (n <= 0 || n % 2 === 0) return null;

  for (let i = 1; i <= n / 2; i++) {
    arr.push(i * 2 - 1);
  }

  let half = arr.map((x) => " ".repeat((n - x) / 2).concat("*".repeat(x)));
  let rev = half.slice().reverse();

  return half.concat("*".repeat(n)).concat(rev).join("\n").concat("\n");
}
