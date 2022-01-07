/**
 * @param {number[]} nums
 * @return {number[]}
 */

// sort排序 从小到大a-b，从大到小a+b
 var sortArray = function(nums) {
  return nums.sort((a, b) => a - b);
};

// 冒泡排序
// 比较所有相邻的两个项，如果第一个比第二个大就交换位置
// 内层循环减i，从内循环减去外循环中跑过的轮数，可以避免内循环中所有不必要的项
var sortArray = function (nums) {
  // 外层每次循环找出最大的数
  for (let i = 0; i < nums.length; i++) {
    // 判断每次是否需要交换
    for (let j = 0; j < nums.length - 1- i; j++) {
      if (nums[j] > nums[j + 1]) {
        // ES6可以这样交换两个变量
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        // 而这之前只能这样交换两个变量
        // const temp = nums[j];
        // nums[j] = nums[j + 1];
        // nums[j + 1] = nums[j];
      }
    }
  }
  return nums;
}