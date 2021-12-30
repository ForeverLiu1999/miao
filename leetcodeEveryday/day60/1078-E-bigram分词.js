/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
  // 拆分成数组
  const words = text.split(" ");
  const ans = new Array();
  // 因为至少两个词在前，所以遍历-2
  for (let i = 0; i < words.length - 2; i++) {
    // 如果first和second连续，则把i+2push了
    if(words[i] === first && words[i + 1] === second) {
      ans.push(words[i + 2]);
    }
  }
  return ans;
};