// offer 57 -E- II. 和为s的连续正数序列
// 滑动窗口
// 没有参考物数组，但是可以根据下标
var findContinousSequence = function (target) {
  let l = 1, r = 2, sum = 3, res = [];
  // 滑动窗口框架
  while (l < r) {
    if (sum === target) {
    let ans = [];
    for (let k = 1; k <= r; k++) {
      ans[k - 1] = k;
    }
    res.push(ans);
    // 等于的情况,继续窗口往右搜索，同时缩小左边的
    sum = sum - 1;
    l++;
    } else if (sum > target) {
      // 大于的条件,缩小窗口,sum已经加过了
      sum = sum - 1;
      l++;
    } else {
      // 小于的情况，滑动窗口继续扩大
      r++;
      sum = sum + r;
    }
  }
  return res;
}