/**
 * @param {number} x
 * @return {number}
 */
// 二分法 从0-x不断二分 二分法时间复杂度为O(logx) 空间复杂度O(1)
// k为满足k平方<=x,集合的最大值
// 粗略定下检索范围0-x，k取值的可能取件为[0,x],即left<=k<=right
// 循环条件为left<=right 终止条件为left>right
// 由于left可能越界，优先返回right
 var mySqrt = function(x) {
  let left = 0;
  let right = x;
  while (left <= right) {
    let mid = left + ((right - left) >> 1) // 中间位置索引x>>1表示除以2并取整,缩小一下遍历的范围
    if (mid * mid <= x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};