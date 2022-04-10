// 57-M-插入区间
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = (intervals, newInterval) => {
  // 存放结果
  const res = [];
  // 指针i
  let i  = 0;
  const len = intervals.length;
  // 先遍历不重叠的区间,全部都在newInterval的左边,则把当前区间push进res中,i++,则循环结束时,当前区间的右边界落在newInterval中.
  while (i < len && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i]);
    i++;
  }
  // 再遍历重叠区间,重叠区间左边界 <= newInterval右边界,intervals中和newInterval有重叠的区间合并成一个新区间,左边界取重叠区间左边界较小者,右边界取重叠区间右边界最大者.
  while (i < len && intervals[i][0] <= newInterval[1]) {
    // 左边界取较小者,更新给newInterval的左边界
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    // 右边界取较大者,更新给newInterval的右边界
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  // 循环结束后,newInterval为合并后的区间,push进res
  res.push(newInterval);
  // 在newInterval右边,没重叠的区间不需要额外判断
  while (i < len) {
    res.push(intervals[i]);
    i++;
  }
  return res;
};
