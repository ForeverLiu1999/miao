/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */

//  给出的日期一定是在 1971 到 2100 年之间的有效日期。
// 即在 1971 年 1 月 1 日，到 2100 年 12 月 31 日之间。通过查询日历可知，1970 年 12 月 31 日是星期四，我们只需要算出输入的日期距离 1970 年 12 月 31 日有几天，再加上 3 后对 7 求余，即可得到输入日期是一周中的第几天。
// 假设输入的是2100.12.31
 var dayOfTheWeek = function(day, month, year) {
  const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
  // (1)输入年份之前的年份的天数贡献 1971.1.1到2099.12.31之间的所有天数 (1)(2)此处需要考虑到闰年的影响,当年份是400倍数或者是4的倍数且不是100倍数时，该年是闰年，二月份多一天
  let days = 365 * (year - 1971) + Math.floor((year - 1969) / 4);
  // (2)输入年份中，输入月份之前的天数贡献 2100.1.1到2100.11.31之间的所有天数
  for (let i = 0; i < month - 1; ++i) {
    days += monthDays[i];
  }
  if ((year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) && month >= 3) {
    days += 1;
  }
  // (3)输入月份中的天数贡献 2100.12.1到2100.12.31之间所有天数
  days += day;
  return week[(days + 3) % 7];
};