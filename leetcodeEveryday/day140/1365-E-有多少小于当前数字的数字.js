// 1365-E-有多少小于当前数字的数字
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力笨比解法
 var smallerNumbersThanCurrent = function(nums) {
  let result = [];
  let count = 0;
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums.length; ++j) {
      if (nums[i] > nums[j]) {
        count++;
      }
    }
    result[i] = count;
  }
  return result;
};
// [4,6,8,2];
// [2,4,6,8];
//  0 1 2 3
// 先排序，记录每一个数在原数组的位置，对于排序后数组中的每一个数，
// 选择其左侧第一个小于他的数，这样就得到了小于当前数字的数字
var smallerNumbersThanCurrent = function (nums) {
  let n = nums.length;
  // 创建一个二维数组同时保存value和idex
  const data = new Array(n).fill(0).map(v => new Array(2).fill(0));
  // 遍历nums所有元素和对应原索引，放入data中
  for (let i = 0; i < n; i++) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }
  // 排序
  data.sort((a, b) => a[0] - b[0]);
  const ret = new Array(n);
  let prev = -1;
  for (let i = 0; i < n; ++i) {
    if (prev == -1 || data[i][0] !== data[i - 1][0]) {
      prev = i;
    }
    ret[data[i][1]] = prev;
  }
  return ret;
}

// 数组范围0-100,建立一个频次数组cnt,cnt[i]代表i出现的次数，
// 那么对于数字i来说，小于他的数目为cnt[0...i-1]
var smallerNumbersThanCurrent = function(nums) {
  // 0-100是101个数
  const cnt = new Array(101).fill(0);
  const n = nums.length;
  // 等于i的数有几个
  for (let i = 0; i < n; ++i) {
    // nums[0]为1，nums[99]为100
      cnt[nums[i]] += 1;
  }
  for (let i = 1; i <= 100; ++i) {
      cnt[i] += cnt[i - 1];
  }
  const ret = [];
  for (let i = 0; i < n; ++i) {
      ret.push(nums[i] ? cnt[nums[i] - 1] : 0);
  }
  return ret;
};