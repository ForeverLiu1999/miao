/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

// 时间复杂度: O(N)
// 空间复杂度: O(N)

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

var findOcurrences = function(text, first, second) {
  const words = text.split(" ");
  const list = [];
  for (let i = 2; i < words.length; i++) {
    if (words[i - 2] === first && words[i - 1] === second) {
      list.push(words[i]);
    }
  }
  const size = list.length;
  const ret = Array(size).fill("");
  for (let i = 0; i < size; i++) {
    ret[i] = list[i];
  }
  return ret;
}