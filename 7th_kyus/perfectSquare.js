const isSquare = n => {
    if (n < 0) return false;
    let sqrt = String(Math.sqrt(n))
    
    if(sqrt.split('').includes('.')) {
          return false;
     } else {
          return true;
     }
    
  }

//   one liner
const isSquaree = n => Math.sqrt(n) % 1 === 0