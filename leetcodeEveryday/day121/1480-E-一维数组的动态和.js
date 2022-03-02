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

// 创建新数组来保存
var runningSum = function (nums) {
  let arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    arr[i] = arr[i - 1] + nums[i];
  }
  return arr;
}