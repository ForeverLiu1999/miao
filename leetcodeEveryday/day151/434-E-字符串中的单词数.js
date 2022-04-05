// 434-E-字符串中的单词数
/**
 * @param {string} s
 * @return {number}
 */

// 原地法
// 如果一个字母是起始字母或者这个字母的前一个字母是空格,说明一个单词结束,计数器加一
var countSegments = s => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if ((i == 0 || s[i - 1] == " ") && s[i] != " ") {
      count++;
    }
  }
  return count;
}

// 遍历统计简单粗暴
 var countSegments = function(s) {
  let ans = 0, last = " ";
  for(let c of s){
    // 为了防止一串空格出现干扰遍历,不仅要确认当前为空格，而且要确认上一个元素不为空格
      if(c == " " && last != " ")
          ans++;
      last = c;
  }
  return last == " " ? ans : ans + 1;
};

// 先split拆成数组再用filter过滤掉所有非空格的元素,然后剩下的数组长度就是有多少个空格,每个空格就是一个单词
var countSegments = function (s) {
  return s.split(" ").filter(item => item != "").length;
}
