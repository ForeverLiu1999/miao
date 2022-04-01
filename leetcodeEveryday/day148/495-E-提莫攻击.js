// 495-E-提莫攻击
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
// findPoisonedDuration ([1,4], 2);
 var findPoisonedDuration = function(timeSeries, duration) {
  // 总的持续中毒时间
  let ans = 0;
  // 恢复为未中毒的其实时间
  let expired = 0;
  for (let i = 0; i < timeSeries.length; ++i) {
    // 如果处于未中毒状态,所以中毒持续时间增加duration,
      if (timeSeries[i] >= expired) {
          ans += duration;
          // 当已经处于中毒状态时,因为这里毒不能叠加只能刷新,所以中毒结束时间为timeSeries[i] + duration,但还要减去
      } else {
          ans += timeSeries[i] + duration - expired;
      }
      // 将每次中毒后新增的中毒持续时间相加即为总的持续中毒时间
      expired = timeSeries[i] + duration;
  }
  return ans;
};