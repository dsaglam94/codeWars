// "The Shell Game" involves cups upturned on a playing surface, with a ball placed underneath one of them. The index of the cups are swapped around multiple times. After that the players will try to find which cup contains the ball.

// Your task is as follows. Given the cup that the ball starts under, and list of swaps, return the location of the ball at the end. Cups are given like array/list indices.

// For example, given the starting position 0 and the swaps [(0, 1), (1, 2), (1, 0)]:

// The first swap moves the ball from 0 to 1
// The second swap moves the ball from 1 to 2
// The final swap doesn't affect the position of the ball.
// So

// swaps = [[0,1], [1,2], [1, 0]]
// find_the_ball(0, swaps) == 2
// There aren't necessarily only three cups in this game, but there will be at least two. You can assume all swaps are valid, and involve two distinct indices.

find_the_ball = function (start, swaps) {
  let last;
  //   console.log(start, swaps)
  for (let i = 0; i < swaps.length; i++) {
    if (!last) {
      last = start;
    }

    if (swaps[i].includes(last)) {
      last = swaps[i].filter((x) => x !== last)[0];
    }
  }
  return last;
};

// ES6 version
find_the_ball = function (start, swaps) {
  return swaps.reduce((s, v) => {
    return s == v[0] ? v[1] : s == v[1] ? v[0] : s;
  }, start);
};
