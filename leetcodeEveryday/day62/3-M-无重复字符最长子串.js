/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    let set = new Set();
    let maxLen = 0;
    // 从i的位置遍历得到最长子串的长度
    let j = i;
    while(j < len && !set.has(s[j])) {
      set.add(s[j]);
      maxLen++;
      j++;
    }
    // 取历史最大值
    result = Math.max(result, maxLen);
  }
  return result;
};