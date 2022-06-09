// Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

// Examples
// remove("Hi!") === ""
// remove("Hi! Hi!") === ""
// remove("Hi! Hi! Hi!") === ""
// remove("Hi Hi! Hi!") === "Hi"
// remove("Hi! !Hi Hi!") === ""
// remove("Hi! Hi!! Hi!") === "Hi!!"
// remove("Hi! !Hi! Hi!") === "!Hi!"

function remove (string) {
    let splittedStr = string.split(' ')
    let r = [];
    
    for(let i = 0; i < splittedStr.length; i++) {
        let count = 0
        for(let j = 0; j < splittedStr[i].length; j++) {
          if(splittedStr[i][j] === '!') {
            count++
          }
        }
        if(count !== 1) {
          r.push(splittedStr[i])
        }
    }
    
    return r.join(' ')
}

// refactored version
function remove(s){
    return s.split(' ').filter(i => i.split('!').length != 2).join(' ');
}