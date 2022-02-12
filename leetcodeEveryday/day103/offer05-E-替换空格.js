// offer05-E-替换空格
/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  // 拆成数组
  s = s.split("");
  // 长度
  let oldLen = s.length;
  // 空格数
  let spaceCount = 0;
  for (let i = 0; i < oldLen; i++) {
    // 如果此元素为空格，spaceCount++
    if (s[i] === " ") spaceCount++;
  }
  // 每遇到一次空格就加长度1
  s.length += spaceCount * 2;
  // 从后往前遍历，双指针
  for (let i = oldLen - 1, j = s.length - 1; i >= 0; i--, j--) {
    // 如果i不为空格,直接把j位置修改为i位置
    if (s[i] !== " ") s[j] = s[i];
    // 如果i位置为空格，那么要替换为%20
    else {
      s[j - 2] = "%";
      s[j - 1] = "2";
      s[j] = "0";
      // 每次减2
      j -= 2;
    }
  }
  // 拼成字符串
  return s.join("");
};