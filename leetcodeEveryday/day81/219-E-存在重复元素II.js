// 219-E-存在重复元素II
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 笨比暴力解法
 var containsNearbyDuplicate = function(nums, k) {
  nums.sort((a, b) => a - b);
  let flag = false;
  for (let i in nums) {
    if ((nums[i] === nums[i + 1]) && (Math.abs(i - j) <= k)) flag = true;
  }
  return flag;
};

// 哈希表解法
// 核心思想
//从左到右遍历数组，当遍历到下标i时，如果存在下标j<i使num[i]=nums[j]，则有i-j<=k时找到了ij
// 而如果i之前存在多个元素与nums[i]相等，为了判断k的问题，就要在这些元素中找下标最大的元素，记为j，判断i-j<=k成立否
// 步骤一和步骤二的顺序不能改变，因为当遍历到下标i时，只能在下标i之前的元素中寻找与当前元素相等的元素以及该元素的最大下标
var containsNearbyDuplicate = function (nums, k) {
  // 创建哈希map
  const map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const num = nums[i];
    // 步骤一 如果哈希表中已经存在和nums[i]相等的元素且该元素在哈希表中记录的下标j满足i-j<=k，返回true
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
    // 步骤二 将nums[i]和下标i存入哈希表中，此时i是nums[i]最大下标
    map.set(num, i);
  }
  // 而当遍历结束时，如果没有遇到两个相等元素的小标差绝对值不超过k，返回false
  return false;
}

// 滑动窗口
// 检查nums中每个长度不超过k+1的滑动窗口，同一个滑动窗口中任意两个下标差的绝对值不超过k
// 如果存在一个滑动窗口，其中存在重复元素，则下标ij满足nums[i]===nums[j]&&Math.abs(i-j)<=k
// 而如果搜索滑动窗口都不存在重复元素，则不存在符合要求的下标
// 所以只需检查每个滑动窗口中的重复元素情况
// 如果一个滑动窗口结束下标为i，则开始下标为max(0, i-k),用哈希集合存储滑动窗口中的元素，从左到右遍历数组nums，当遍历到i时如下
var containsNearbyDuplicate = function(nums, k) {
  const set = new Set();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    // 当i<k时，则下标i-k-1处元素被移出滑动窗口
      if (i > k) {
          set.delete(nums[i - k - 1]);
      }
      // 判断nums[i]是否在哈希集合中，如果在则有重复元素，返回true
      if (set.has(nums[i])) {
          return true;
      }
      // 如果不在就加进去
      set.add(nums[i])
  }
  // 如果遍历结束后,所有窗口都不存在重复元素,说明没有
  return false;
};