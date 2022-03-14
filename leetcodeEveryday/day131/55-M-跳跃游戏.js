// 55-M-跳跃游戏
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// dp[i]表示能否到达位置i，对每个位置i判断能否通过前面的位置跳跃过来，当前位置j能达到
// 并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为true，便是i位置也可以到达
// 时间复杂度 O(n^2)
// 空间复杂度O(n)
var canJump = function (nums) {
  // 用false初始化这个数组
  let dp = new Array(nums.length).fill(false);
  // 如题第一次能到达，初始化
  dp[0] = true;
  // 遍历nums每一个元素,从[1]开始，因为[0]已经有true
  for (let i = 1; i < nums.length; i++) {
    // 检查在每一个元素位置时，能否跳到这里
    for (let j = 0; j < i; j++) {
      // 当前位置j能达到，并且当前位置j加上能到达的位置如果超过了i，那dp[i]更新为true，就是i位置也可以到达
      if (dp[j] && nums[j] + j >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[nums.length - 1];
};

var canJump = function (nums) {
  let dp = new Array(nums.length).fill(false);
  dp[0] = true;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && nums[j] + j >= i) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[nums.length - 1];
}