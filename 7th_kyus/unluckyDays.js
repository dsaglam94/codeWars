// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year in Gregorian calendar as integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

function unluckyDays(year){

    let date = new Date()
    let counter = 0
    let month;
    
    for ( month = 0; month < 12; month++ ) {
       date.setFullYear(year, month, 13);
          if (date.getDay() == 5){
            counter++;
          }
      }
  
      return counter;   
    
  }