// 73-M-矩阵置零
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 用两个标记数组分别记录每一行和每一列是否有零出现.
// 先遍历数组一次,如果某个元素为0,那么就将该元素所在的行和列对应标记数组的位置重置为true.
// 最后再次遍历该数组,用标记数组更新原数组.
var setZeroes = matrix => {
  // 先得到二维数组的宽和长
  const m = matrix.length,
    n = matrix[0].length;
  // 创建行列的标记数组
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果有0出现
      if (matrix[i][j] == 0) {
        // 标记数组对应位置设置为true
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 如果标记数组设置的位置为true
      if (row[i] || col[j]) {
        // 就把原数组位置设置为0
        matrix[i][j] = 0;
      }
    }
  }
};

var setZeroes = matrix => {
  const m = matrix.length,
  n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (matrix[i][j] == 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || row[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}