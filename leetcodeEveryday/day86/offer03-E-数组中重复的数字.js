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

var findRepeatNumber = function (nums) {
  let map = {};
  for (let num of nums) {
    if (!map[num]) {
      map[num] = true;
    } else {
      return num;
    }
  }
}

// set中无重复，用长度判断
var findRepeatNumber = function (nums) {
  let set = new Set();
  for (let i in nums) {
    var l = set.size;
    set.add(nums[i]);
    if (set.size === l) return nums[i];
  }
}