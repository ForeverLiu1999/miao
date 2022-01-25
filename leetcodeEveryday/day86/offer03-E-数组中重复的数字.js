// offer03-E-数组中重复的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
  let map = new Map();
  for (let i of nums) {
    if (map.has(i)) return i;
    map.set(i, 1);
  }
  return null;
};