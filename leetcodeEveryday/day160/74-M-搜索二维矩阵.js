// 74-M-搜索二维矩阵
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 把后一行拼接到前一行行末,这样就得到了一个升序数组
// 然后二分搜索找到目标元素
var searchMatrix = (matrix, target) => {
  const m = matrix.length,
    n = matrix[0].length;
  // 最小下标和最大下标
  let low = 0,
    high = m * n - 1;
  // 遍历范围
  while (low <= high) {
    // 取中间值
    const mid = Math.floor((high - low) / 2) + low;
    const x = matrix[Math.floor(mid / n)][mid % n];
    // 如果x比target小就说明target在数组右半部分
    if (x < target) {
      low = mid + 1;
    // 如果x比target大就说明target在数组左半部分
    } else if (x > target) {
      high = mid - 1;
      // 如果相等就说明找到了
    } else {
      return true;
    }
  }
  // 遍历完一遍没找到
  return false;
};