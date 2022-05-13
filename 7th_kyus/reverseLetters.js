function reverseLetter(str) {
    let filteredStr = str.match(/[a-zA-Z]/g)
    return filteredStr.reverse().join('')
  }

//   diff versions
reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');

// refactored version
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');