// 56-M-合并区间
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  let res = [];
  // 对左边界排序
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  // 开始循环遍历,cur取intervals[i]的值,i = 0时已取到了,所以从1开始
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    // 如果prev区间右闭合处的值大于等于cur区间的左闭合处值,说明有重合
    if (prev[1] >= cur[0]) {
      // 而在重合情况下,要判断cur右闭合处和prev右闭合处哪个大,取大的值,这样就可以把prev和cur两个区间合并
      prev[1] = Math.max(cur[1], prev[1]);
      // 而如果prev区间右闭合处的值小于cur区间的左闭合处值说明区间没有重合,将上次的prev压入res并更新prev
    } else {
      // 遍历结束,同时把最后一次更新压入res
      res.push(prev);
      prev = cur; // 更新prev
    }
  }
  // 最后一次赋值也要push一次
  res.push(prev);
  return res;
};