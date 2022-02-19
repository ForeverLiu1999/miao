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

const maxArea = height => {
  // 定义两个指针，分别指向头尾
  let [m, n] = [0, height.length - 1];
  // 定义最大区域
  let maxArea = 0;
  // 若m=n，则面积为0，所以不取等于
  while (m < n) {
      // 当前有效面积的高
      const h = Math.min(height[m], height[n]);
      // 当前面积
      const area = (n - m) * h;
      // 更新最大面积
      maxArea = Math.max(maxArea, area);
      // 更新指针
      if (height[m] < height[n]) {
          // 左指针对应的值小，左指针右移
          m++;
      } else {
          // 右指针对应的值小，右指针左移
          n--;
      }
  }
  return maxArea;
};

const maxArea = height => {
  let [m, n] = [0, height.length - 1];
  let maxArea = 0;
  while (m < n) {
    const h = Math.min(height[m], height[n]);
    const area = (n - m) * h;
    maxArea = Math.max(maxArea, area);
    if (height[m] < hieght[n]) {
      m++;
    } else {
      n--;
    }
  }
  return maxArea;
}