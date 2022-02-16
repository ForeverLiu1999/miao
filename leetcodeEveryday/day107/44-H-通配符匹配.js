// 44-H-通配符匹配
// https://leetcode-cn.com/problems/wildcard-matching/solution/yi-ge-qi-pan-kan-dong-dong-tai-gui-hua-dpsi-lu-by-/
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = (s, p) => {
  if (s == null || p == null) return false
  //单个*和多个*的效果是一样的
  p = p.replace(/\*{2,}/g, '*')
  let len1 = s.length,
      len2 = p.length
  let dp = new Array(len1 + 1)
  for (let i = 0; i < dp.length; i++) dp[i] = new Array(len2 + 1).fill(0) // 将项默认为false
  dp[0][0] = 1
  //如果第一个字符是*，可以匹配任意串
  if (p[0] == "*") dp.map(a=>{a[1]=1});
  for (let i = 1; i < len1 + 1; ++i) {
      for (let j = 1; j <= len2; ++j) {
          if (p[j - 1] == '*') {
              //如果匹配到*，表示从左或者上找都行
              dp[i][j] = dp[i][j - 1] | dp[i - 1][j];
          }
          else if (p[j - 1] == '?' || s[i - 1] == p[j - 1]) {
              //单字符匹配成功
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }
  return dp[len1][len2] == 1;
}