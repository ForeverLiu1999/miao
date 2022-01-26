// 14-E-最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
// 时间复杂度: O(s) s为所有字符串的长度之和
var longestCommonPrefix = function (strs) {
  // 当字符串数组长度为0时则公共前缀为空，直接返回
  if (strs.length === 0)
    return "";
  // 令最长公共前缀ans的值为第一个字符串，进行初始化
  let ans = strs[0];
  // 遍历后边的字符串，依次将其与ans进行比较，两两找出公共前缀
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < ans.length && j < strs[i].length; j++) {
      if (ans[j] !== strs[i][j])
        break;
    }
    // 如果查找过程中ans为空，则公共前缀不存在直接返回
    ans = ans.substr(0, j);
    if (ans === "")
      return ans;
  }
  return ans;
};