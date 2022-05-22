// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
    let countN = 0;
    let countS = 0;
    let countW = 0;
    let countE = 0;
      
      if(walk.length < 10 || walk.length > 10) { 
        return false;
      } else {
        for (let i = 0; i < walk.length; i++) {
          console.log(walk)
          if( walk[i] === 'n') {
            countN++;
          } else if (walk[i] === 's') {
            countS++;
          } else if (walk[i] === 'e') {
            countE++;
          } else if (walk[i] === 'w') {
            countW++
          }
        }
      }
    
      return (countS === countN && countW === countE)
}