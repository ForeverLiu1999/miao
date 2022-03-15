// 18-M-四数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 双指针
// 固定两个值，然后在剩余的数组中找两个数的和等于target减去被固定两个值的和
var fourSum = function (nums, target) {
  if (nums.length < 4) return []
  nums.sort((a, b) => a - b)
  res = []
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue
      const partSum = nums[i] + nums[j]
      let left = j + 1,
        right = nums.length - 1
      while (left < right) {
        const sum = partSum + nums[left] + nums[right]
        if (sum == target) {
          res.push([nums[i], nums[j], nums[left], nums[right]])
          /*
          下面的代码相当于：
          while (left < right) {
              // 不管前后相不相等，left 都要往前走
              left++;
              if (nums[left - 1] != nums[left]) break;
          }
          while (left < right) {
              // 不管前后相不相等，right 都要往后走
              right--;
              if (nums[right + 1] != nums[right]) break;
          }
          */
          // 去重
          while (left < right && nums[left] == nums[++left]);
          while (left < right && nums[right] == nums[--right]);
        } else if (sum < target) {
          left++
        } else {
          right--
        }
      }
    }
  }
  return res
};

var fourSum = function (nums, target) {
  // 如果长度小于4，返回空
  if (nums.length < 4) return [];
  // 简单排个序
  nums.sort((a, b) => a - b);
  res = [];
  // 固定第一个数 从i=0开始
  for (let i = 0; i < nums.length - 3; i++) {
    // 去重 忽略后边与前边重复的元素
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    // 固定第二个数 从i+1开始
    for (let j = i + 1; j < nums.length - 2; j++) {
      // 去重 忽略后边与前边重复的元素
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      // 得到前两个数的和
      const partSum = nums[i] + nums[j];
      // 设定左右指针位置
      let left = j + 1,
        right = nums.length - 1;
      // 设置指针运动边界
      while (left < right) {
        // sum是四个数的和
        const sum = partSum + nums[left] + nums[right];
        // 如果符合条件
        if (sum == target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          /*
          下面的代码相当于：
          while (left < right) {
              // 不管前后相不相等，left 都要往前走
              left++;
              if (nums[left - 1] != nums[left]) break;
          }
          while (left < right) {
              // 不管前后相不相等，right 都要往后走
              right--;
              if (nums[right + 1] != nums[right]) break;
          }
          */
          // 去重
          while (left < right && nums[left] == nums[++left]);
          while (left < right && nums[right] == nums[--right]);
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}

// var fourSum = function (nums, target) {
//   if (nums.length < 4) return [];
//   nums.sort((a, b) => a - b);
//   res = [];
//   for (let i = 0; i < nums.length - 3; i++) {
//     if (i > 0 && nums[i] == nums[i - 1]) continue;
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       if (j > i + 1 && nums[j] == nums[j - 1]) continue;
//       const partSum = nums[i] + nums[j];
//       let left = j + 1, right = nums.length - 1;
//       while (left < right) {
//         const m = partSum + nums[left] + nums[right];
//         if (sum == target) {
//           res.push([nums[i], nums[j], nums[left], nums[right]]);
//           while(left < right && nums[left] == nums[++left]);
//           while(left < right && nums[right] == nums[--right]);
//         } else if (sum < target) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }
//   }
//   return res;
// }