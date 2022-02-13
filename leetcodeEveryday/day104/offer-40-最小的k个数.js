// offer-40-最小的k个数
// ac地址：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
// 原文地址：https://xxoo521.com/2020-02-21-least-nums/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 直接排序
 var getLeastNumbers = function(arr, k) {
  return arr.sort((a, b) => a - b).slice(0, k);
};

// 快排
var getLeastNumbers = function(arr, k) {
  let len = arr.length
  if (!len || !k) return []
  let start = 0
  let end = len - 1
  // 寻找一次标杆元素的位置
  let index = quikSort(arr, start, end)
  // 如果标杆元素的位置不等于 K
  while(index !== k - 1) {
      if (index > k-1) {
          // 如果上一次查找，标杆元素位置大于目标位置
          end = index-1
          index = quikSort(arr, start, end)
      } else {
          // 如果上一次查找，标杆元素位置小于目标位置
          start = index + 1
          index = quikSort(arr, start, end)
      }
  }
  return arr.slice(0, index+1)
};

function quikSort(arr, left, right) {
  let pivot = arr[left]
  while(left < right) {
      while(left < right && arr[right] >= pivot) right--
      arr[left] = arr[right]
      while(left < right && arr[left] < pivot) left++
      arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}