// 75-M-颜色分类
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 冒泡排序原地解决
var sortColors = nums => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      // 如果前一个元素比后一个元素大
      if (nums[j] > nums[j + 1]) {
        // 那么就交换两个值的位置
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};

// 一次遍历,如果是0移动到数组头,如果是2移动到数组尾


// sort大法好
var sortColors = nums => {
  nums.sort((a, b) => a - b);
}