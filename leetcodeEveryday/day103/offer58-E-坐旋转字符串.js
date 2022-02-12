// offer58-E-坐旋转字符串
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

// 不申请额外空间，只在原地操作
// 1反转前n
// 2反转n到末尾
// 3反转整体字符串
 var reverseLeftWords = function(s, n) {
  //  反转函数
  const reverse = (str, left, right) => {
    // 拆分
    let strArr = str.split("");
    for (; left < right; left++, right--) {
      // 反转
      [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    }
    // 拼接
    return strArr.join("");
  }
// 1反转前n
  s = reverse(s, 0, n - 1);
// 2反转n到末尾
  s = reverse(s, n, s.length - 1);
// 3反转整体字符串
  return reverse(s, 0, length - 1);
};