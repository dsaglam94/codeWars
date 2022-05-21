// Here we have a function that help us spam our hearty laughter. But is not working! I need you to find out why...

// Expected results:

// spam(1);  // hue
// spam(6);  // huehuehuehuehuehue
// spam(14); // huehuehuehuehuehuehuehuehuehuehuehuehuehue

function spam(number){

    let str = 'hue'
    for(let i = 1; i < number; i++) {
      str += 'hue'
    }
    return str;
}

// refactored
function spam(number){
    return Array(++number).join("hue");
  }