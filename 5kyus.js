// 12.04.2022

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    let hours = parseInt( seconds / 3600 ) ;
    let minutes = parseInt( seconds / 60 ) % 60;
        seconds = seconds % 60;
    
    let pad = function(val) {
      return val < 10 ? "0" + val : val;
    }
    
    return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    }