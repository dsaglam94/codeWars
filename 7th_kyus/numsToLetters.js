// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

function switcher(x){

    let res = '';
    for(let i = 0; i < x.length; i++) {
      if(x[i] === '27') {
        res += '!'
      } else if( x[i] === '28') {
        res += '?'
      } else if( x[i] === '29' ){
        res += ' ';
      } else {
        
      res += String.fromCharCode(123 - x[i])
      }
    }
    return res;
}