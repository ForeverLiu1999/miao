/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
//  var merge = function(nums1, m, nums2, n) {
//   let num = new Array(m + n).fill(0);
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     num.unshift(nums1[i]);
//   }
//   for (let j = nums2.length - 1; j >= 0; j--) {
//     num.unshift(nums2[j]);
//   }
//   return num;
// };

var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m, ...nums2);
  nums1.sort((a, b) => a - b);
};

// 双指针法
var merge = function (nums1, m , nums2, n) {
// 双指针p1p2分别指向两个数组
  let p1 = 0, p2 = 0;
  // 先提前创建一个充满0的数组
  const sorted = new Array(m + n).fill(0);
  var cur;
  // 双指针遍历范围
  while (p1 < m || p2 < n) {
    if (p1 === m) {
      cur = nums2[p2++];;
    } else if (p2 === n) {
      cur = nums1[p1++];
    } else if (nums1[p1] < nums2[p2]) {
      cur = nums1[p1++];
    } else {
      cur = nums2[p2++];
    }
    sorted[p1 + p2 - 1] = cur;
  }
  // 把结果sorted填入nums1
  for (let i = 0; i != m + n; ++i) {
    nums1[i] = sorted[i];
  }
}