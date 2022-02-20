// 12-M-整数转罗马数字
/**
 * @param {number} num
 * @return {string}
 */
// 根据罗马数字的唯一表示法，为了表示一个给定的整数num，
// 我们寻找不超过num 的最大符号值，将num 减去该符号值，
// 然后继续寻找不超过num 的最大符号值，将该符号拼接在上一个找到的符号之后，
// 循环直至num 为 00。最后得到的字符串即为 \textit{num}num 的罗马数字表示。
// 编程时，可以建立一个数值-符号对的列表valueSymbols，按数值从大到小排列。
// 遍历valueSymbols 中的每个数值-符号对，若当前数值value 不超过num，
// 则从num 中不断减去value，直至num 小于value，然后遍历下一个数值-符号对。
// 若遍历中num 为 00 则跳出循环。
var intToRoman = function (num) {
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  const roman = [];
  for (const [value, symbol] of valueSymbols) {
    while (num >= value) {
      num -= value;
      roman.push(symbol);
    }
    if (num == 0) {
      break;
    }
  }
  return roman.join("");
};

// 硬编码
var intToRoman = function (num) {
  const thousands = ["", "M", "MM", "MMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const roman = [];
  roman.push(thousands[Math.floor(num / 1000)]);
  roman.push(thousands[Math.floor(num % 1000 / 100)]);
  roman.push(tens[Math.floor(num % 100 / 10)]);
  roman.push(ones[num % 10]);
  return roman.join('');
};