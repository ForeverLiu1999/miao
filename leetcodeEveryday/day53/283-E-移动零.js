/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {  //遇到非0元素，让nums[j] = nums[i]，然后j++
          nums[j] = nums[i];
          j++;
      }
  }
  for (let i = j; i < nums.length; i++) {//剩下的元素全是0
      nums[i] = 0;
  }
  return nums;
};
console.log(moveZeroes([0,1,0,3,12]));