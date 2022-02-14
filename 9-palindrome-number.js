/* Description:
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not. */

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  const reversed = Number(String(x).split('').reverse().join(''));
  return reversed === x;
};

// DRIVER CODE //
// console.log(isPalindrome(121));
// console.log(isPalindrome(11011));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));
