/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
  // 取出年
  const year = +date.slice(0, 4);
  // 取出月
  const month = +date.slice(5, 7);
  // 取出日
  const day = +date.slice(8);
  // 把每个月的天数放入数组中
  const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 注意闰年情况，400倍数，或者是4的倍数而不是100倍数
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    ++amount[1];
  }
  let ans = 0;
  // 前一个月为止的天数
  for (let i = 0; i < month - 1; ++i) {
    ans += amount[i];
  }
  return ans + day;
};