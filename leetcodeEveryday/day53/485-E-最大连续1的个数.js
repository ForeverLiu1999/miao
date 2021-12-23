/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
   let l = nums.length;
   let count = 0;
   let result = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] == 1) {
      count++;
      result = Math.max(result, count);
    } else {
      count = 0;
    }
  }
  return result;
};
findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);