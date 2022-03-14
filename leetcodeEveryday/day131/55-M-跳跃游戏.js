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

// 贪心算法
// 尽可能跳得远，看最多能覆盖的位置，不断更新能覆盖的距离
var canJump = function (nums) {
  // 长度为1，直接就是终点
  if (nums.length === 1) return true;
  // 能覆盖的最远距离
  let cover = nums[0];
  for (let i = 0; i <= cover; i++) {
    // 当前覆盖距离cover和当前位置加能跳跃的居立中取一个较大值
    cover = Math.max(cover, i + nums[i]);
      // 覆盖距离大于或等于nums.length - 1说明能到达终点
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  // 循环完成之后，还没返回true 就是无法到达终点
  return false;
}

var canJump = function (nums) {
  if (nums.length === 1) return true;
  let cover = nums[0];
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
}