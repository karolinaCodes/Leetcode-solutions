/* Description: 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

const twoSum = function (nums, target) {
  // create clone to reset the value of the array to original array
  let numsClone = [...nums];

  for (let i = 0; i < numsClone.length; i++) {
    // remove a single element of the array with each iteration to compare to rest of the numbers
    let num = numsClone.splice(i, 1)[0];

    for (let j = 0; j < numsClone.length; j++) {
      if (num + numsClone[j] === target) {
        // add one because we removed an element above
        return [i, j + 1];
      }
    }

    // reset the array to original so can remove the following element for comparison
    numsClone = [...nums];
  }
};

// Driver code //
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
