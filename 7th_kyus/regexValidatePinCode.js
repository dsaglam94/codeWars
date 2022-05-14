// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
  
    let pinlen = pin.length;
    let isCorrectLength = (pinlen == 4 || pinlen == 6);
    let hasOnlyNumbers = pin.match(/^\d+$/);
      
    if(isCorrectLength && hasOnlyNumbers){
      return true;
    } else {
      return false;
    }
    
  }

//   One liner version
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }