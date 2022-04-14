// 64-M-最小路径和
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 动态规划
// DP方程
// 当前项最小路径和 = 当前项值 + 上方项或左方项中的最小值
// grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
// 边界处理
// grid的第一行与第一列,分别没有上方项和左方项,左移单独处理计算起项的最小路径和
 var minPathSum = grid => {
  // 取得二维数组的行和列
  let row = grid.length, col = grid[0].length;
  // 出去第一行的第一个元素
  for (let i = 1; i < row; i++) {
    // 计算第一行
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < col; j++) {
    // 计算第一列
    grid[0][j] += grid[0][j - 1];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[row - 1][col - 1];
};

var minPathSum = grid => {
  let row = grid.length, col = grid[0].length;
  for (let i = 1; i < row; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < col; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  return grid[row - 1][col - 1];
}