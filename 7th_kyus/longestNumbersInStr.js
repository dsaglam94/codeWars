// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

function solve(str){
    let myRegex = /[a-z]/g
    let myStr = str.split(myRegex)
          .sort((a,b) => b.length - a.length)
          .sort((a,b) => b-a)
    
    return Number(myStr[0])
};