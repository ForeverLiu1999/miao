/**
 * @param {string} s
 * @return {string}
 */

// 正则表达式 /\s/在每种空白字符处拆分数组 +一次和无限次之间的匹配
 var reverseWords = function(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
 };

 // 不管空格，用filter筛选
 var reverseWords = function(s) {
  return s.split(' ').filter(item => item).reverse().join(' ');
 };

// js原生实现
// 使用双指针的方法，从后向前遍历字符
var reverseWords = function (s) {
  // 右指针指向末尾，res存储最终结果
  let r = s.length - 1, l = r, res = "";
  // 从后往前遍历
  while (l >= 0) {
      // 因为单词和单词之间必有空格，所以先找到单词的尾部
      while (s[r] === " ") {
          r--;
      }
      // 然后左指针指向右指针
      l = r;
      // 如果还有单词可以遍历，就给上次单词后边加空格
      if (l >= 0 && res) {
          res += " ";
      }
      //再找到单词的头部
      while (s[l] && s[l] !== " ") {
          l--;
      }
      //遍历单词并添加，l和r之间就是单词
      for (let i = l + 1, j = r; i <= j; i++) {
          res += s[i];
      }

      // 右指针指向左指针，开始下一轮遍历，也就是跳到下一个单词
      r = l;
  }
  return res;
};