// 383-E-赎金信
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// ransomNote中每个字母的出现次数大于等于magazine中相同字母的出现次数即可
 var canConstruct = function(ransomNote, magazine) {
  // 如果ransomNote的长度大于magezine的长度，指定是不行了
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const letter = new Array(26).fill(0);
  for (const c of magazine) {
    letter[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (const c of ransomNote) {
    letter[c.charCodeAt() - 'a'.charCodeAt()]--;
    // 如果存在ransomNote中存在的某个字母次数大于magezine中存在的某个字母次数
    if (letter[c.charCodeAt() - 'a'.charCodeAt() < 0]) return false;
  }
  return true;
};