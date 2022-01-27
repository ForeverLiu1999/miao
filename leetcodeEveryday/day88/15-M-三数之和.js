// 15-M-三数之和
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 时间复杂度：O(n^2) n为数组长度
 var threeSum = function(nums) {
 let ans = [];
 const len = nums.length;
 if (nums == null || len < 3) return ans;
//  排序
 nums.sort((a, b) => a - b);
 for (let i = 0; i < len; i++) {
  //  固定一个nums[i]
  // 如果nums[i]>0,则三数之和必然无法等于0，结束循环
   if (nums[i] > 0) break;
  //  如果nums[i]==nums[i-1]，则说明该数字重复，会导致结果重复，所以应该跳过
   if (i > 0 && nums[i] == nums[i - 1]) continue;
  //  左右指针指向nums[i]后边两端
   let L = i + 1;
   let R = len - 1;
   while (L < R) {
    //  看三个数的和sum情况
     const sum = nums[i] + nums[L] + nums[R];
    //  如果sum为0满足条件
     if (sum == 0) {
       ans.push([nums[i], nums[L], nums[R]]);
      //  去重，当sum==0时，nums[L]==nums[L+1]则会导致结果重复，应该跳过，L++
       while (L < R && nums[L] == nums[L + 1]) L++;
      //  去重，当sum==0时，nums[R]==nums[R-1]则会导致结果重复，应该跳过，R--
       while (L < R && nums[R] == nums[R - 1]) R--;
       L++;
       R--;
     }
     else if (sum < 0) L++;
     else if (sum > 0) R--;
   }
 }
 return ans;
};

var threeSum = function (nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
          while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
        } else { // 实力太强，把大神那边右移一位
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last)
      while (nums[i] === nums[++i]) {}
    }
  }
  return res
}