// 1480-E-一维数组的动态和
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
};