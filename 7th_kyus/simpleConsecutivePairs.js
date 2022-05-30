// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3. 
// --the last digit has no pair, so we ignore.

function pairs(ar){
    const myArr = ar.slice();
    if(myArr.length % 2 !== 0) {
      myArr.pop();
    }
    let count = 0 ;
    let pairs = [];
    
    for (let i = 0; i < myArr.length; i++) {
        let temp = []
        for(let j = 0; j < 2; j++) {
          temp.push(myArr[j])
        }
        myArr.shift()
        myArr.shift()
        myArr.length++
        pairs.push(temp)
    }
      for (let i = 0; i < pairs.length; i++) {
        for (let j = 0; j < pairs[i].length; j++) {
          console.log(pairs[j])
          if(pairs[i][j] + 1 === pairs[i][j+1] || pairs[i][j] - 1 === pairs[i][j+1]) {
          count++
        }  
      }
    }
    return count
};

// refactored version
function pairs(array, count = 0) {
    for (let i = 0; i < array.length; i += 2)
      if (Math.abs(array[i] - array[i + 1]) === 1)
        count += 1;
    return count;
}