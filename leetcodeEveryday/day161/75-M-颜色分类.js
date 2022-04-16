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
var sortColors = nums => {
  let i = 0, count = 0;
  // 数组有多长就遍历多少次
  while (count < nums.length) {
    // 如果这个元素是0,就把它splice取出,然后从数组头部加进去一个0,所以数组长度不变
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.unshift(0);
      i++;
    } else if (nums[i] === 2) {
      // 此处不需要i++,因为删除前一个,后一个会顶上来
      nums.splice(i, 1);
      nums.push(2);
      // 如果这个元素不是0也不是2那就是1,不用管直接跳过
    } else {
      i++;
    }
    count++;
  }
  return nums;
}

// sort大法好
var sortColors = nums => {
  nums.sort((a, b) => a - b);
}