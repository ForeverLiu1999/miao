// 4-H-寻找两个正序数组中的中位数
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  let p1 = nums1;
  let p2 = nums2;
  let p3 = [...p1, ...p2]; //p3得到拼接后的数组
  let p4 = p3.sort((a, b) => a - b); // 从小到大排序
  n = p4.length;
  if (!p4) {
    return 0;
  } else {
    if (n % 2 !== 0) {
      // 如果长度不能被2整除则为奇数，直接获取中位数
      let i = Math.floor(n / 2);
      return p4[i];
    } else {
      // 若长度为偶数,寻找中间两个数字除以2为结果
      let j = Math.floor(n / 2) - 1;
      return ((p4[j] + p4[j + 1]) / 2);
    }
  }
};

var findMedianSortedArrays = function (nums1, nums2) {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  return (arr[Math.floor((arr.length - 1) / 2)] + arr[Math.floor(arr.length / 2)]) / 2;
}