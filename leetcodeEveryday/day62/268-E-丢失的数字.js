/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序法
// 把nums排序,数组长度n,下标范围[0,n-1]数组中下标值与其对应元素如果不相等，则是丢失的数字
// 设缺失k，则k != n，nums[i]=i;但nums[k]=k+1
// k=n时,0到n-1都没有缺失,所以任意0<=i<n下,nums[i]=i
// 所以遍历结果有两种,从左到右遍历,如果有0<=i<n使得nums[i]!=i,则缺失的数字是最小i
// 如果对任意0<=i<n,都有nums[i]=i,则缺失数字为n
// 时间复杂度:O(nlogn),sort排序本身时间复杂度O(nlogn),遍历数组O(n)
// 空间复杂度:O(logn)
 var missingNumber = function(nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;
  for(let i = 0; i < l; i++) {
      if (nums[i] !== i) {
          return i;
      }
  }
  return l;
};