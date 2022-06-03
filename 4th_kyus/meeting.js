// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
    let res = [];
    let r = s.toUpperCase().split(';')
    for(let i = 0; i < r.length; i++) {
        let temp = ''
        for(let j = 0; j < 1; j++){
          const name = r[i].split(':')
          temp += `(${name[1]}, ${name[0]})`
        }
      res.push(temp)
    }
    const sorted = res.sort()
    console.log(sorted)
    console.log(res)
    return sorted.join('');
}
  
//  refactored version
function meeting(s) {
    let string = s.toUpperCase().split(';')
                  .map(x => x.split(':').reverse().join(', '))
                  .sort()
                  .join(')(')
    return '(' + string + ')'
}

// similar but
function meeting(s) {
    return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
}