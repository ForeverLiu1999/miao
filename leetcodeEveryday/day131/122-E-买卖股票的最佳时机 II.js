// 122-E-买卖股票的最佳时机 II
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划 写法一
// 每天交易结束后，手里只有0和1两种情况
// dp[i][0]表示i天手里没有股票的最大利润
// dp[i][1]表示手里持有一只股票的最大利润
// 设prices[i]为收益
// dp[i][0]转移方程为:
// 前一天也没有股票，即为dp[i][0]
// 而如果前一天有股票，则要卖出得到收益prices[i]
// dp[i][0] max{dp[i - 1][0], dp[i - 1][1]}
// dp[i][1]转移方程为:
// 前一天有一只股票dp[i][1]
// 而如果前一天没有股票，则要买入，减少prices[i]的收益
// dp[i][1] = max{dp[i - 1][i], dp[i - 1][0] - prices[i]}
// 初始状态，第0天交易结束时dp[0][0] = 0,dp[0][1] = -prices[0]
// 所以只要从前往后依次计算，而且由于全部计算完以后，持有股票的收益一定小于不持有股票的收益
// dp[n - 1][0]的收益一定大于dp[n - 1][1]
// 所以最后答案为dp[n - 1][0]
 var maxProfit = function(prices) {
  const n = prices.length;
  // 相当于创建一个长n宽2
  const dp = new Array(n).fill(0).map(v => new Array(2).fill(0));
  // 长维度首个元素初始化
  dp[0][0] = 0, dp[0][1] = -prices[0];
  for (let i = 1; i < n; ++i) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  return dp[n - 1][0];
};