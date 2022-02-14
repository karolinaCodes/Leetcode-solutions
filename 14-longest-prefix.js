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
  let prefix = '';
  let preprefix = '';

  if (!strs[0]) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    prefix += strs[0][i];

    for (var j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(prefix)) {
        return preprefix;
      }
    }
    preprefix = prefix;
  }

  return prefix;
};

strs = ['flower', 'flow', 'flight'];
strs2 = ['dog', 'racecar', 'car'];
strs3 = ['a'];
strs4 = ['aaa', 'aa', 'aaa'];

// DRIVER CODE //
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(strs2));
console.log(longestCommonPrefix(strs3));
console.log(longestCommonPrefix(strs4));
