// 1365-E-有多少小于当前数字的数字
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力笨比解法
 var smallerNumbersThanCurrent = function(nums) {
  let result = [];
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};