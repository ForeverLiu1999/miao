// 剑指 Offer 61-E-扑克牌中的顺子
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 除0以外，数组最大值与最小值之差不能超过4
// 除0以外，数组中不能有相同数字
 var isStraight = function(nums) {
  // 对数组从小到大排序，然后筛除所有的0
  nums = nums.sort((a, b) => a - b).filter(item => item != 0);

  // 如果最大值减去最小值之差大于4，说明不符合题意
  if (nums[nums.length - 1] - nums[0] > 4) return false;
  // 判断没有重复，也就是任意相邻元素不相等
  for (let i = 0 ; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) return false;
  }
  // 如果去重以后长度不同，则说明有重复
  let set = new Set();
  for (let i in nums) {
    set.add(nums[i]);
  }
  if (nums.length != set.size) return false;

  // 如果没被筛掉就说明没问题
  return true;
};