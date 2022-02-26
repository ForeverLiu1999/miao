// 119-E-杨辉三角 II
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// 杨辉三角形性质如下
//  https://leetcode-cn.com/problems/pascals-triangle-ii/solution/yang-hui-san-jiao-ii-by-leetcode-solutio-shuk/
var getRow = function (rowIndex) {
  // 创建整体杨辉三角形框架
  const C = new Array(rowIndex + 1).fill(0);
  for (let i = 0; i <= rowIndex; ++i) {
    // 在每一行里创建所有空元素
    C[i] = new Array(i + 1).fill(0);
    // 每一行的第一个和最后一个元素都是1
    C[i][0] = C[i][i] = 1;
    for (let j = 1; j < i; j++) {
      // 运用杨辉三角的性质：每个数字等于上一行左右两个数字之和，第n行的第i个数等于第i-1行的第i-1个数和i个数之和
      C[i][j] = C[i - 1][j - 1] + C[i - 1][j];
    }
  }
  // 返回第rowIndex行
  return C[rowIndex];
};