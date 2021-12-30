/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 局部最优不等于全局最优，triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
// 2不知道选3还是4，但倒数第二层的657知道自己一定选哪个，61,51,73

 var minimumTotal = function(triangle) {
  const h =triangle.length;
  // 初始化dp数组 h层高 h层就是h个数组
  const dp = new Array(h);
  for (let i = 0; i < h; i++) {
    // 第0层就是triangle[0]的长度
    dp[i] = new Array(triangle[i].length);
  }
  // 自底向上遍历，i从h-1层遍历，每次结束减1
  for (let i = h - 1; i >= 0; i--) {
    // 倒数第一层同层的所有数字，倒数第二层同层的所有数字...
    for (let j = 0; j < triangle[i].length; j++) {
      // // base case h-1最底层
      if (i == h - 1) {
        dp[i][j] = triangle[i][j];
      } else { // 状态转移，上一层由他下面一层计算出
        dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
      }
    }
  }
  return dp[0][0];
};