/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针
// 解题思路，以列为单位，每列雨水的高度取决于该列左侧最高的柱子和右侧最高的柱子中最矮的那个柱子的高度
// min(lHeight, rHeight) - height
 var trap = function(height) {
  let n = height.length;
  if (n == 0) {
    return 0;
  }
  let res = 0;
  let left_max = [], right_max = [];
  // 左侧最大值
  left_max[0] = height[0];
  for (let i = 1; i < n; i++) {
    left_max[i] = Math(left_max[i - 1], height[i]);
  }
  // 右侧最大值
  right_max[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    right_max[i] = Math.max(right_max[i + 1], height[i]);
  }
  // 统计所有雨水的面积
  for (let i = 0; i < n; i++) {
    res += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return res;
};