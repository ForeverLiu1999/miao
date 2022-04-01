// 495-E-提莫攻击
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
  let ans = 0;
  let expired = 0;
  for (let i = 0; i < timeSeries.length; ++i) {
      if (timeSeries[i] >= expired) {
          ans += duration;
      } else {
          ans += timeSeries[i] + duration - expired;
      }
      expired = timeSeries[i] + duration;
  }
  return ans;
};