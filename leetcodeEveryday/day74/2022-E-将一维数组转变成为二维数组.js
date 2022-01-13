/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
// 如果original长度不满足m*n，返回空数组
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) {
    return [];
  }
  // 创建m行n列的二维数组，填满0
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < original.length; i += n) {
    ans[Math.floor(i / n)].splice(0, n, ...original.slice(i, i + n))
  }
  return ans;
};

// 易懂版
var construct2DArray = function (original, m, n) {
  // 如果original长度不满足m*n，返回空数组
  if (m * n != original.length) {
    return [];
  }
  // 创建m行n列的二维数组
  const res = new Array(m);
  for (let i = 0; i < m; i++) {
    res[i] = new Array(n)
    for (let j = 0; j < n; j++)
      res[i][j] = original[i * n + j];
  }
  return res;
};