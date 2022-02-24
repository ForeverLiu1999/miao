// 746-E-使用最小花费爬楼梯
/**
 * @param {number[]} cost
 * @return {number}
 */
// 动态规划
// 假设数组 cost 的长度为 n，则 n 个阶梯分别对应下标 0 到 n−1，楼层顶部对应下标 n，问题等价于计算达到下标 n 的最小花费。可以通过动态规划求解。
// 创建长度为 n+1 的数组 dp，其中 [i] 表示达到下标 i 的最小花费。
// 由于可以选择下标 0 或 1 作为初始阶梯，因此有 dp[0]=dp[1]=0。
// 当 2≤i≤n 时，可以从下标 i−1 使用 cost[i−1] 的花费达到下标 i，或者从下标 i−2 使用 cost[i−2] 的花费达到下标 i。为了使总花费最小，dp[i] 应取上述两项的最小值，因此状态转移方程如下：
// dp[i]=min(dp[i−1]+cost[i−1],dp[i−2]+cost[i−2])
// 依次计算 dp 中的每一项的值，最终得到的 dp[n] 即为达到楼层顶部的最小花费。
 var minCostClimbingStairs = function(cost) {
  const n = cost.length;
  const dp = new Array(n + 1);1
  dp[0] = dp[1] = 0;
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }
  return dp[n];
};

// 滚动数组