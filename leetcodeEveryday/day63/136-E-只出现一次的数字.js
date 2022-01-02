/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  var map = [];
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    if (num in map) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  for (var i in map) {
    if (map[i] == 1) {
      return i;
    }
  }
};