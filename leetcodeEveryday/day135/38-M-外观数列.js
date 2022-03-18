// 38-M-外观数列
// 类似波非那切数列分析
// 想得到countAndSay(n)，就需要知道contAndSay(n-1)
// 时间复杂度：O(N * M) 其中N为给定的正整数 M是生成字符串中的最大长度
// 空间复杂度：O(M) M是生成字符串中的最大长度
/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  // 初始化第一项
  let str = "1";
  for (let i = 2; i <= n; i++) {
    const nums = [];
    let start = 0;
    let pos = 0;
    while (pos < str.length) {
      while (pos < str.length && str[pos] === str[start]) {
        pos++;
      }
      nums.push('' + (pos - start) + str[start]);
      start = pos;
    }
    str = nums.join('');
  }
  return str;
};