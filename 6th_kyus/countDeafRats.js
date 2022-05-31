// Story
// The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

// But some of the rats are deaf and are going the wrong way!

// Kata Task
// How many deaf rats are there?

// Legend
// P = The Pied Piper
// O~ = Rat going left
// ~O = Rat going right
// Example
// ex1 ~O~O~O~O P has 0 deaf rats

// ex2 P O~ O~ ~O O~ has 1 deaf rat

// ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats

const countDeafRats = (town) => {
    let deafs = 0
    let ident = 'O'
    for ( let i = 0; i < town.length; i++){
       if ( town[i] === 'P' ){
        ident =  '~'
       }
       if (town[i] === ident){
         deafs++
       }
       if (town[i] === '~' || town[i] === 'O'){
        i++
       }
     }
    return deafs;
}