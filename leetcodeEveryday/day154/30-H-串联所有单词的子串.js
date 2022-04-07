// 30-H-串联所有单词的子串
// https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/30-chuan-lian-suo-you-dan-ci-de-zi-chuan-fnp9/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
// 判断s每个字串是否可以由words的单词组合而成,符合的把下标保存起来,最后返回即可.
 var findSubstring = (s, words) => {
  if (!s || !words || !words.length) {
    return [];
  }
  // key是单词,value是出现的次数.
  let wordsMap = new Map();
  // for循环判断s每个字串
  for (let word of words) {
    // 扫描每个字串tmpS的单词是否匹配words的单词
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }
  // 一个单词的长度
  let oneWordsLen = words[0].length;
  // 所有单词的长度
  let allWordsLen = oneWordsLen * words.length;
  let result = [];
  // 开始扫描s的每个字串,s每次只移动一位
  for (let i = 0; i < s.length - allWordsLen + 1; i++) {
    // s的一个子串
    let tmpS = s.substring(i, i + allWordsLen);
    // 存放子串各个单词及其出现次数,最后用于和wordsMap作比较
    let map = new Map();
    // 判断s的子串是否可以拆成words里所有单词
    let tmpLength = 0;
    for (let j = 0; j < allWordsLen; j += oneWordsLen) {
      let curWord = tmpS.substring(j, j + oneWordsLen);
      map.set(curWord, (map.get(curWord) || 0) + 1);
      // words不包含该单词,直接跳过,判断下一个单词
      if (!wordsMap.has(curWord)) {
        break;
      }
      // 当前单词的数量比words中该单词的数量还多,也跳过判断下一个单词
      if (map.get(curWord) > wordsMap.get(curWord)) {
        break;
      }
      // 如果不大于说明该curWord符合words的单词,计算一下子串符合words的长度,借着判断下一个单词的情况
      tmpLength += oneWordsLen;
    }
    // 长度相等,说明该字符可以拆成words里的所有单词
    if (tmpLength === tmpS.length) {
      result.push(i);
    }
  }
  // 返回能拆分成words的所有起始索引
  return result;
};