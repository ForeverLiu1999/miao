// 面试题 17.16-E-按摩师
/**
 * @param {number[]} nums
 * @return {number}
 */
//  var massage = function(nums) {
//    let maxTime = 0;
//   for (let i of nums) {
//     for (let j = i + 1; j < nums.length; j++) {
//       maxTime = Math.max(maxTime, nums[j] - nums[i]);
//     }
//   }
//   return maxTime;
// };

// 一、dp 动态规划
// dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
var massage = function (nums) {
  let n = nums.length;
  // 特殊情况
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  // 创建容器
  let dp = new Array(n + 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    // 核心方程
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

// 动态规划优化
var massage = function (nums) {
  let a = 0, b = 0;
  for (let i = 0; i < nums.length; i++) {
    let c = Math.max(c, b + nums[i]);
    a = b;
    b = c;
  }
  return b;
}