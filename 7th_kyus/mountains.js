// In the planet named Hoiyama, scientists are trying to find the weights of the mountains.
// They managed to find the weights of some mountains.
// But calculating them manually takes a really long time.
// That's why they hired you to develop an algorithm and easily calculate the weights of the mountains.
// Your function has only one parameter which is the width of the mountain and you need to return the weight of that mountain.
// The widths of the mountains are only odd numbers.
// They gave you some information about calculating the weight of a mountain.
// Examine the information given below and develop a solution accordingly.
// width = 3

//           3          ->  3
//         1,2,1        ->  4
//                       +___
//                weight:   7
// width = 5

//           5          ->  5
//         3,4,3        -> 10
//       1,2,3,2,1      ->  9
//                       +___
//                weight:  24

const mountainsOfHoiyama = width => (width + 1) * (width ** 2 + 2 + width ) / 8;