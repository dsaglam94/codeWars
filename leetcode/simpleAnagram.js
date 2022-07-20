// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

const isAnagram = (s, t) => {
  const newS = s.split("").sort();
  const newT = t.split("").sort();
  return s.length > t.length
    ? newS.every((letter, i) => letter === newT[i])
    : newT.every((letter, i) => letter === newS[i]);
};

//  Gotta optimize to have a better performance
