/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 时间复杂度O(haystack.length * needle.length)
// 空间复杂度O(1)，只需要常数的空间保存若干变量
// 让字符串needle与字符串haystack的所有长度为nLength的子串均匹配一次
 var strStr = function(haystack, needle) {
  const hLength = haystack.length, nLength = needle.length;
  for (let i = 0; i + nLength <= hLength ; i++) {
    let flag = true;
    for (let j = 0; j < nLength; j++) {
      // 每次匹配失败立刻停止当前子串的匹配，对下一个子串继续匹配
      if (haystack[i + j] != needle[j]) {
        flag = false;
        break;
      }
    }
    // 如果当前子串匹配成功，返回当前子串开始位置i
    if (flag) {
      return i;
    }
  }
  // 如果所有子串匹配失败则返回-1
  return -1;
};