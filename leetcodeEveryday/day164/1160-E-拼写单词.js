// 1160-E-拼写单词
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
// 哈希表
// 输入：words = ["cat","bt","hat","tree"], chars = "atach"
// 输出：6
// 解释：
// 可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
var countCharacters = function (words, chars) {
  // 用于保存长度之和
  let size = 0;
  // 字母Map，用于存放每个字母的出现频率
  let charMap = new Map();
  for (let char of chars) {
    // 遍历字母表，统计其中每个字母出现的频率
    // 看哈希表charMap中是否有char,如果存在就加一,如果不存在就说明首次出现
    charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
  }
  // 双重循环，外层循环遍历单词数组中的每个单词
  for (let word of words) {
    // 单词Map，用于存放单词中每个字母的出现频率
    let wordMap = new Map();
    // 内层循环
    for (let char of word) {
      // 统计字符串（单词）中每个字母出现的频率
      // 看哈希表wordMap中是否有char,如果存在就加一,如果不存在就说明首次出现
      wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
    }
    // 是否满足拼写
    let enough = true;
    // 遍历待匹配单词的每个字母
    for (let char of word) {
      // 判断 字母表中的字母是否足够拼写单词也就是如果单词中字母出现次数大于字母串中字母出现次数说明不满足条件,把enough改成false 或者 字母表中是否有该字母
      if (wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
        enough = false;
        break;
      }
    }
    if (enough) {
      // 累加可拼写的单词长度
      size += word.length;
    }
  }
  // 返回单词长度
  return size;
};

var countCharacters = (words, chars) => {
  let size = 0;
  let charMap = new Map();
  for (let char of chars) {
    charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
  }
  for (let word of words) {
    let wordMap = new Map();
    for (let char of word) {
      wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
    }
    let enough = true;
    for (let char of word) {
      if (wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
        enough = false;
        break;
      }
    }
    if (enough) {
      size += word.length;
    }
  }
}