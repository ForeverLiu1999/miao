// 58-E-最后一个单词的长度
/**
 * @param {string} s
 * @return {number}
 */
// 第一种情况 "aaa bbb"
// 字符串从后向前遍历,直到遍历到头或者遇到空格为止,然后最后一个单词的单词尾减去单词头即为单词长度
// 第二种情况 "aaa bbb "
// 先过滤掉字符串末尾的空格,然后按第一种情况处理

 var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  while (end >= 0 && s[end] == ' ') end--;
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s[start] != ' ') start--;
  return end - start;
};

var lengthOfLastWord = function(s) {
  let index = s.length - 1;
  while (s[index] === ' ') {
      index--;
  }
  let wordLength = 0;
  while (index >= 0 && s[index] !== ' ') {
      wordLength++;
      index--;
  }
  return wordLength;
};

var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  while ( s[index] === " ") {
    index--;
  }
  let wordLength = 0;
  while (index >= 0 && s[index] !== " ") {
    wordLength++;
    index--;
  }
  return wordLength;
}