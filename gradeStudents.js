// omplete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let avarage = (s1 + s2 + s3) / 3
    
    if(avarage >= 90 && avarage <= 100) {
      return 'A'
    } else if(avarage >= 80 && avarage <= 90) {
      return 'B'
    } else if (avarage >= 70 && avarage <= 80) {
      return 'C'
    } else if (avarage >= 60 && avarage <= 70) {
      return 'D'
    } else if (avarage >= 0 && avarage <= 60) {
      return 'F'
    }
} 