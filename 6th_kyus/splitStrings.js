// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){

    let res = [];
    if(str.length % 2 !== 0) {
      for (let i = 0; i < str.length-1; i++) {
        let temp = str[i] + str[i+1]
        res.push(temp)
        i++
      }
      let temp = str[str.length-1] + '_'
      res.push(temp)
    } else {
      for (let i = 0; i < str.length-1; i++) {
        let temp = str[i] + str[i+1]
        res.push(temp)
        i++
      }
    }
    return res;
}

// with while loop
function solution(str){
    let i = 0;
    let result = new Array();
    if (str.length % 2 !== 0) {
      str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2;
      }
    return result;
}

// with regex
function solution(s){
    return (s+"_").match(/.{2}/g)||[]
}

// Because match(/.{2}/g) will only return matches in groups of 2. So if your string is an odd length after you add "_", the last underscore will not be able to be captured in a group of 2 and so it is not captured by match.