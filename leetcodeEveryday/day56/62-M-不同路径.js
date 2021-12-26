/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 动态规划
// 每一格位置是由左一格和上一格决定的，所以有dp[i][j] = dp[i-1][j] + dp[i][j-1]
// 注意对于第一行dp[0][j],或者第一列dp[i][0],由于都在边界,所以只能为1
 var uniquePaths = function(m, n) {
  // m行n列
  const dp =new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 第一列边界条件
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  // 第一行边界条件
  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }
  for(let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
};