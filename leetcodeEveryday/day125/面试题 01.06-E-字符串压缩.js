// 面试题 01.06-E-字符串压缩
/**
 * @param {string} S
 * @return {string}
 */
 var compressString = function(S) {
  let result = '';
  let index = 0;
  // 计数器记录此处字符出现次数，默认为1
  let count = 1;
  while (index < S.length) {
    // 如果当前字符和下一个字符不同，则停止计数，统计到result中
    if (S[index] !== S[index + 1]) {
      result += S[index] + count;
      // 而当计数完成后，则要计数器归一
      count = 1;
    } else {
      count++;
    }
    index++;
  }
  return result.length >= S.length ? S : result;
};