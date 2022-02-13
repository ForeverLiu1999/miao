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