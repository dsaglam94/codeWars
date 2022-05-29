

function vaporcode(string) {
    let r = string.split(' ')
    let result = [];
    for (let i = 0; i < r.length; i++) {
      let temp = []
      for (let j = 0; j < r[i].length; j++) {
        temp.push(r[i][j].toUpperCase())
  //       console.log(r[i][j])
      }
      result.push(temp.join('  '));
    }
    return result.join('  ').trim()
}

// refactored version
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}