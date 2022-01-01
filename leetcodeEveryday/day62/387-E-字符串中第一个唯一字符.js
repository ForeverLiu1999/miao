/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const counts = new Array(26).fill(0); // 长度为26的数组,存放字符的出现次数
  for (const c of s) { // 遍历s的每个字符，统计出现次数
    counts[c.charCodeAt(0) - 97]++; // 97是a的unicode码
  }
  for (let i = 0; i < s.length; i++) { // 再次遍历s
    if (counts[s[i].charCodeAt(0) - 97] == 1) { // 找出第一个频次为1的字符的索引
      return i;
    }
  }
  return -1; // 没有只出现一次的字符,返回-1
};

// 聪明逼写法
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    // 如果第一个值等于最后一个值说明只有一个值
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
          return i
      }
  }
  return -1
};