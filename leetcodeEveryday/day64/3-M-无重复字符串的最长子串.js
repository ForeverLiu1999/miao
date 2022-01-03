/**
 * @param {string} s
 * @return {number}
 */

// 时间复杂度O(N),左右指针分别遍历整个字符串一次
// 两个指针分别表示窗口的左右边界，左指针为枚举子串的起始位置，右指针为rk
// 每一步操作中，左指针右移一格，表示我们开始枚举下一个字符作为起始位置
// 然后不断右移右指针，但要确保窗口内子串中没有重复字符
// 移动结束后，这个字串即使以左指针开始的，不包含重复字符的最长子串，并记录这个长度
// 枚举结束后，找到最长子串的长度即为答案
 var lengthOfLongestSubstring = function(s) {
  // 哈希集合，记录每个字符是否出现
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为-1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i != 0) {
      // 左指针每向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 右指针不断右移
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 第i到rk个字符是一个无重复字符子串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};