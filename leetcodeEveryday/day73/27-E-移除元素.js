/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// 双指针
 var removeElement = function(nums, val) {
  const n = nums.length;
  let left = 0;
  // 右指针指向正在操作的元素
  for (let right = 0; right < n; right++) {
    // 如果不想等就一定会输出，如果右指针指向的值等于val就不需要输出，所以左指针不需要移动，只移动右指针
    if (nums[right] !== val) {
      // 把要输出的值赋给左指针，左指针指向赋值的元素
      nums[left] = nums[right];
      left++;
    }
  }
  // 因为修改后的[0,left)都是不等于val的，所以left的值就是长度
  return left;
};