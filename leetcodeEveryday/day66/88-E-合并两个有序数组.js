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
  let num = new Array(m + n - 3).fill(0);
  num = nums1.concat(nums2);
  return num;
};