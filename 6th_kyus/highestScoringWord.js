// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
    let myArr = x.toUpperCase().split(' ')
    let scoreArr = []
    for(let i = 0; i < myArr.length; i++) {
      let temp = 0;
      for(let j = 0; j < myArr[i].length; j++) {
        let charScore = myArr[i].charCodeAt(j) - 64
        temp += charScore
      }
      scoreArr.push(temp)
    }
    let sortArr = [...scoreArr].sort((a,b) => b - a)
    let biggestNum = +(scoreArr.filter(item => item === sortArr[0])[0])
    let biggestIndex = scoreArr.indexOf(biggestNum)
    // console.log(scoreArr)
    // console.log(sortArr)
    // console.log(biggestNum)
    return myArr[biggestIndex].toLowerCase();
}

// refactored version
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}