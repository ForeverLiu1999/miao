// 392-E-判断子序列
/**z
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 暴力贪心算法转数组求解
 var isSubsequence = function(s, t) {
   if (s.length == 0) return true;
  let sStack = s.split('');
  let tStack = t.split('');
  while (tStack.length > 0) {
    let tItem = tStack.pop();
    if (tItem == sStack[sStack.length - 1]) {
      sStack.pop();
      if (sStack.length === 0) return true;
    }
  }
  return false;
};

// 递归
var isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  let i = 0;
  while (i < t.length) {
    if (s[0] === t[i]) {
      const rest_s = s.substring(1);
      const rest_t = t.substring(i + 1);
      return isSubsequence(rest_s, rest_t);
    }
    i++;
  }
  return false;
}

// 双指针
// 两个指针分别扫描长串和短串，目标是为短串中的字符在长串中找到匹配
// 如果不相同，短串的指针不动，长串的指针移动考察下一个字符
// 如果短串走完了，说明短串的字符在长串中都找到匹配
// 如果短串没有走完，长串走完了，说明考察了整个长串也没能找齐短串的所有字符
const isSubsequence = (subStr, str) => {
  if (subStr.length == 0) return true;
  let index = 0;
  let subIndex = 0;
  // 外层循环遍历短串每个字符
  while (index < str.length) {
// 如果指向的字符相同，两个指针都移动考察下一个字符
    if(subStr[subIndex] == str[index]) {
      subIndex++;
      if (subIndex > subStr.length - 1) {
        return true;
      }
    }
    index++;
  }
  return false;
}