// 278-E-第一个错误的版本
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 二分法
// 当一个版本是正确的，则之前全为正确，而一个版本是错误的，则之后全为错误
// 将左右边界分别初始化为1和n
// 根据左右边界找到中间版本并检查，如果正确，那么第一个错误的版本必然在其右边，缩进左边界
// 反之第一个错误的版本必然位于该版本的左侧，缩进有边界
// 每次判断都缩减了边界，而且每次缩减一半
// 所以O(logn)
var solution = function(isBadVersion) {
  return function(n) {
      let left = 1, right = n;
      while (left < right) { // 循环直至区间左右端点相同
          const mid = Math.floor(left + (right - left) / 2); // 防止计算时溢出
          if (isBadVersion(mid)) {
              right = mid; // 答案在区间 [left, mid] 中
          } else {
              left = mid + 1; // 答案在区间 [mid+1, right] 中
          }
      }
      // 此时有 left == right，区间缩为一个点，即为答案
      return left;
  };
};