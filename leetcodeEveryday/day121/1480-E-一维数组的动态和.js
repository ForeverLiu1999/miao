// 1480-E-一维数组的动态和
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 原地解决
var runningSum = function(nums) {
  let n = nums.length;
 for (let i = 1; i < n; i++) {
   nums[i] += nums[i - 1];
 }
 return nums;
};