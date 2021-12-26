/**
 * @param {number[][]} triangle
 * @return {number}
 */
 var minimumTotal = function(triangle) {
  const h =triangle.length;
  // 初始化dp数组
  const dp = new Array(h);
  for (let i = 0; i < h; i++) {
    dp[i] = new Array(tringle[i].length);
  }
  for (let i = h - 1; i >= 0; i--) { // 自底向上遍历
    for (let j = 0; j < triangle[i].length; j++) { // 同一层的
      if (i == h - 1) { // base case 最底层
        dp[i][j] = triangle[i][j];
      } else { // 状态转移，上一层由他下面一层计算出
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};