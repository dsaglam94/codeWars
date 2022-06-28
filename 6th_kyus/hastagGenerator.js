// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (!str.trim()) return false;

  let generated =
    "#" +
    str
      .split(" ")
      .map((letter) => {
        return letter === "" ? "" : letter[0].toUpperCase() + letter.slice(1);
      })
      .join("");
  //   console.log(generated)
  return generated.length > 140 ? false : generated;
}

// diff approach
function generateHashtag(str) {
  if (!str.trim()) return false;

  let newGenerated = "#" + str.split(" ").map(capitalize).join("");
  return newGenerated.length > 140 ? false : newGenerated;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
