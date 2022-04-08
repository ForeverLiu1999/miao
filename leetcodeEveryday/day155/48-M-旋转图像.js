// 48-M-旋转图像
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 辅助数组
// 第i行第j个元素旋转后出现在倒数第i列第j个位置
// matrix[row][col] => matrixNew[col][n - row - 1]
 var rotate = matrix => {
  const n = matrix.length;
  // 创建n行n列二维数组
  const matrixNew = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrixNew[j][n - i - 1] = matrix[i][j];
    }
  }
  // 在原数组上进行修改
  for (let i = 0; i < n; i++) {
     for (let j = 0; j < n; j++) {
       matrix[i][j] = matrixNew[i][j];
     }
  }
};