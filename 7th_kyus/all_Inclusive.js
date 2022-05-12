// a string strng
// an array of strings arr
// Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

// a boolean true if all rotations of strng are included in arr (C returns 1)
// false otherwise (C returns 0)
// Examples:
// contain_all_rots(
//   "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

// contain_all_rots(
//   "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)

function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
      }
  
    }
    return true
  }

//   better one with ES6 higher functions implemented
function containAllRots(strng, arr) {
    return [...strng].map((_,i) => strng.substr(i)+strng.slice(0,i)).every(x => arr.includes(x));
}