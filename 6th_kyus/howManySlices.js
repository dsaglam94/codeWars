// How much bigger is a 16-inch pizza compared to an 8-inch pizza? A more pragmatic question is: How many 8-inch pizzas "fit" in a 16-incher?

// The answer, as it turns out, is exactly four 8-inch pizzas. For sizes that don't correspond to a round number of 8-inchers, you must round the number of slices (one 8-inch pizza = 8 slices), e.g.:

// how_many_pizzas(16) -> "pizzas: 4, slices: 0"
// how_many_pizzas(12) -> "pizzas: 2, slices: 2"
// how_many_pizzas(8) -> "pizzas: 1, slices: 0"
// how_many_pizzas(6) -> "pizzas: 0, slices: 5"
// how_many_pizzas(0) -> "pizzas: 0, slices: 0"

function howManyPizzas(n){
    return `pizzas: ${(n=n*n/64)|0}, slices: ${Math.round(n%1*8)}`;
}