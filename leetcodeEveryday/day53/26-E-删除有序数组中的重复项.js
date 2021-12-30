/**
 * @param {number[]} nums
 * @return {number}
 */
//  var removeDuplicates = function(nums) {
//   let num=new Set(nums)
//   nums.splice(0) // splice(0)会清空原数组太骚了
//   num.forEach((el)=>{
//   nums.push(el)
//   })
//   return nums.length
//   };

var removeDuplicates = function (nums) {
  var nextPlace = 1;
  for (var i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[nextPlace++] = nums[i];
    }
  }
  return nextPlace;
}



