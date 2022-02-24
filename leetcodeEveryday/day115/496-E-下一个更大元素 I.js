// 496-E-下一个更大元素 I
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 暴力解法
 var nextGreaterElement = function(nums1, nums2) {
  const n1 = nums1.length;
  const n2 = nums2.length;
  // 初始化一个与nums1等长的res
  const res = new Array(n1).fill(0);
  // 遍历nums1中所有元素
  for (let i = 0; i < n1; ++i) {
    let j = 0;
    // 从前向后遍历nums2中的所有元素,直至找到了nums2[j]===nums1[i]
    while (j < n2 && nums2[j] !== nums1[i]) {
      ++j;
    }
    // 从j+1开始继续向后遍历,直至找到了nums2[k]>nums2[j],其中k>=j+1
    let k = j + 1;
    while (k < n2 && nums2[k] < nums2[j]) {
      ++k;
    }
    //如果找到了nums2[k],则将res[i]置为nums2[k],否则将res[i]置为-1
    res[i] = k < n2 ? nums2[k] : -1;
  }
  // 返回最终结果res
  return res;
};
// 预处理
// 单调栈+哈希表
var nextGreaterElement = function (nums1, nums2) {
  const map = new Map();
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; --i) {
    const num = nums2[i];
    while (stack.length && num >= stack[stack.lenth - 1]) {
      stack.pop();
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1);
    stack.push(num);
  }
  const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
  return res;
};