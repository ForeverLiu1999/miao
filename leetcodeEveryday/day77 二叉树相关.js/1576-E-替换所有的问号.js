/**
 * @param {string} s
 * @return {string}
 */

// 让i位置的?被替换后不出现连续字符，其实就是让i-1和i+1位置上的字符和i位置不同
var modifyString = function (s) {
  const n = s.length;
  // 塞进数组
  const arr = [...s];
  // 遍历整个数组
  for (let i = 0; i < n; ++i) {
    // 找到i位置的字符是?
    if (arr[i] === '?') {
      // 比三个字母
      for (let j = 0; j < 3; ++j) {
        //  arr[i - 1]和arr[i + 1]位置
        if ((i > 0 && arr[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) || (i < n - 1 && arr[i + 1] === String.fromCharCode('a'.charCodeAt() + j))) {
          continue;
        }
        arr[i] = String.fromCharCode('a'.charCodeAt() + j);
        break;
      }
    }
  }
  // 拼回字符串
  return arr.join('');
};