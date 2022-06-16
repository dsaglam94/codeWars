// Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

function validateUsr(username) {
  let myRegex = /^[a-z0-9_]{4,16}$/g;
  let res = myRegex.test(username);
  return res;
}
