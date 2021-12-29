/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
   let a = [];
   for(i = 0; i < nums.length - 1; i++) {
     if (nums[i] != val) {
      a.push(nums[i]);
     }
   }
  return a.length;
};
removeElement([3,2,2,3], 3);