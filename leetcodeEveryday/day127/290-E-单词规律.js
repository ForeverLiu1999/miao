/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 判断字符与字符串是否一一对应，双射
// 先用哈希表记录每一个字符对应的字符串，以及每一个字符串对应的字符
//
 var wordPattern = function(pattern, s) {
  const word2ch = new Map();
  const ch2word = new Map();
  const words = s.split(' ');
  if (pattern.length !== words.length) {
    return false;
  }
  for (const [i, word] of words.entries()) {
    const ch = pattern[i];
    if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
      return false;
    }
    word2ch.set(word, ch)
    ch2word.set(ch, word);
  }
  return true;
};
