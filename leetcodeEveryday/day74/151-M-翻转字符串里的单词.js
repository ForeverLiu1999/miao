/**
 * @param {string} s
 * @return {string}
 */

// 正则表达式 /\s/在每种空白字符处拆分数组 +一次和无限次之间的匹配
 var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
 };