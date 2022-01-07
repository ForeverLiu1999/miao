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

// 选择排序
var sortArray = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      let min = Infinity;
      let minIndex;
      for (j = i; j < nums.length; j++) {
          if (nums[j] < min) {
              min = nums[j]
              minIndex = j;
          }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
  return nums;
};

// 插入排序
var sortArray = function(nums) {
  for (let i = 1; i < nums.length; i++) {
      let temp = nums[i];
      let j = i - 1;
      for (; j >= 0; j--) {
          if (temp >= nums[j]) break;
          nums[j + 1] = nums[j]
      }
      nums[j + 1] = temp;
  }
  return nums;
};

var sortArray = function(nums) {
  if (nums.length < 2) return nums;
  return  quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, left, right) {
  if (left >= right) return;
  let pivotIndex = partition(nums, left, right)
  quickSort(nums, left, pivotIndex - 1)
  quickSort(nums, pivotIndex + 1, right)
  return nums;
}

// 快速排序
function partition (nums, left, right) {
  let pivot = right;
  let leftIndex = left;
  for (let i = left; i < right; i++) {
      if (nums[i] < nums[pivot]) {
          [nums[leftIndex], nums[i]] = [nums[i], nums[leftIndex]];
          leftIndex++;
      }
  }
  [nums[leftIndex], nums[pivot]] = [nums[pivot], nums[leftIndex]];
  return leftIndex;
}