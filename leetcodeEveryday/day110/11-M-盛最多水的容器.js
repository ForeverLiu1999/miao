// 11-M-盛最多水的容器
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {
    const minHeight = height[i] < height[j] ? height[i++] : height[j--];
    const area = (j - i + 1) * minHeight;
    max = Math.max(max, area);
  }
  return max;
};
// 少写几行
var maxArea = function(height) {
  var i = 0, j = height.length - 1, max = 0
  while (i < j) {
      max = Math.max(max, (j - i) * (height[i] > height[j] ? height[j--]: height[i++]))
  }
  return max
};