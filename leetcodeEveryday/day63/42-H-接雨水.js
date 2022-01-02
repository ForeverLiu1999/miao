/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
// 解题思路，以列为单位，每列雨水的高度取决于该列左侧最高的柱子和右侧最高的柱子中最矮的那个柱子的高度
// min(lHeight, rHeight) - height
// var trap = function(height) {
//   let n = height.length;
//   if (n == 0) {
//     return 0;
//   }
//   let res = 0;
//   let left_max = [], right_max = [];
//   // 左侧最大值
//   left_max[0] = height[0];
//   for (let i = 1; i < n; i++) {
//     left_max[i] = Math.max(left_max[i - 1], height[i]);
//   }
//   // 右侧最大值
//   right_max[n - 1] = height[n - 1];
//   for (let i = n - 2; i >= 0; i--) {
//     right_max[i] = Math.max(right_max[i + 1], height[i]);
//   }
//   // 统计所有雨水的面积
//   for (let i = 0; i < n; i++) {
//     res += Math.min(left_max[i], right_max[i]) - height[i];
//   }
//   return res;
// };

var trap = function (height) {
  var len = height.length;
  var waterSum = 0;
  var leftTillMax = []; // 第i项存的事原数据中第i项以及其左边到此为止的最大值
  var max = 0;
  for (var i = 0; i < len; i++) {
    if (height[i] > max) {
      max = height[i];
    }
    leftTillMax[i] = max;
  }
  var rightTillMax = []; // 第i项存储的是原数据中第i项以及其右边到此为止的最大值
  var max = 0;
  for (var i = len - 1; i >= 0; i--) {
    if (height[i] > max) {
      max = height[i];
    }
    rightTillMax[i] = max;
  }
  for (var i = 1; i < len - 1; i++) {
    waterSum += Math.min(leftTillMax[i], rightTillMax[i]) - height[i];
  }
  return waterSum;
}