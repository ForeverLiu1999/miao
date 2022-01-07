/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 双指针
// 给两数组排序，各一个头指针，创建一个栈用来存放结果，比较两指针大小，不想的则小的指针右移，相等则压入栈，一方遍历结束，另一方剩余元素必不重复
 let intersect = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let l = 0, r = 0, ans = [];
  while (l < nums1.length && r < nums2.length) {
      if (nums1[l] === nums2[r]) {
          ans.push(nums1[l]);
          l++;
          r++;
      } else nums1[l] < nums2[r] ? l++ : r++;
  }
  return ans;
};
