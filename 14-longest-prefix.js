/* Description:
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"*/

/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function (strs) {
  let commonPrefix = '';
  let currString = '';
  let common;
  const firstString = strs.shift();

  // loop through characters of first string of array
  // and slice from beggining of string to i to compare
  for (let i = 1; i < firstString.length + 1; i++) {
    const currString = firstString.slice(0, i);

    // loop through remaining strings of array
    for (let j = 0; j < strs.length; j++) {
      // if current string starts with sliced string of first string of array set common to true
      if (strs[j].startsWith(currString)) {
        common = true;
      } else {
        common = false;
      }
    }

    // if the prefix is common change commonPrefix or else break out of the loop
    if (common) {
      commonPrefix = currLetter;
    } else {
      break;
    }
  }

  return commonPrefix;
};

strs = ['flower', 'flow', 'flight'];
strs2 = ['dog', 'racecar', 'car'];

// DRIVER CODE //
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
