// 566-E-重塑矩阵
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  // 说明元素个数不同,所以无法重塑
  if (m * n != r * c) {
      return nums;
  }
  const ans = new Array(r).fill(0).map(() => new Array(c).fill(0));
  for (let x = 0; x < m * n; ++x) {
      // 对于任意x[0, mn),第x个元素在nums中下标为(x / n, x % n)
      // 而在新的重塑矩阵中对应下标为(x / c, x % c)
      ans[Math.floor(x / c)][x % c] = nums[Math.floor(x / n)][x % n];
  }
  return ans;
};