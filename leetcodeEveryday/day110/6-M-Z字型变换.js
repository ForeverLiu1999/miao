// 6-M-Z字型变换
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 遍历字符串，遍历过程中将每行都看成新的字符串构成字符串数组，最后再将该数组拼接起来即可
// 时间复杂度O(n),n为字符串s的长度
var convert = function (s, numRows) {
  debugger;
  // 如果numRows == 1则说明当前字符串即为结果，直接返回
  if (numRows == 1) return s;
  const len = Math.min(s.length, numRows);
  const rows = [];
  // 否则整个字符串需要经历向下向右向下向右这样的反复循环过程，设定down变量便是是否向下，loc变量表示当前字符串数组的下标
  for (let i = 0; i < len; i++) rows[i] = "";
  let loc = 0;
  // down默认为false
  let down = false;
  // 如果down为true,则loc+=1,字符串数组下标向后移动,将当前字符加入当前字符串中
  // 如果down为false,则表示向右,则loc-=1,字符串数组下标向前移动,将当前字符加入当前字符串中
  for (const c of s) {
    rows[loc] += c;
    if (loc == 0 || loc == numRows - 1)
      down = !down;
    loc += down ? 1 : -1;
  }
  let ans = "";
  for (const row of rows) {
    ans += row;
  }
  return ans;
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// z型变v型以 V 字型为一个循环, 循环周期为 n = (2 * numRows - 2) （2倍行数 - 头尾2个）。
// 对于字符串索引值 \color{red}ii，计算 x = i % n 确定在循环周期中的位置。
// 则行号 \color{blue}yy = min(x, n - x)。
// https://leetcode-cn.com/problems/zigzag-conversion/solution/ji-jian-jie-fa-by-ijzqardmbd/
 var convert = function(s, numRows) {
  if (numRows === 1) return s;
  const rows = new Array(numRows).fill("");
  const n = 2 * numRows - 2;
  for(let i = 0; i < s.length; i++) {
      const x = i % n;
      rows[Math.min(x, n - x)] += s[i];
  }
  return rows.join("");
};
