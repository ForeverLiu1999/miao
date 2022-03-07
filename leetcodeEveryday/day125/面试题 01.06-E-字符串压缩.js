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

// 快慢指针
var compressString = function (S) {
  // 创建ans存储结果，定义双指针位置
  let ans = "", i = j = 0;
  // 遍历S中所有字符
  while (j < S.length - 1) {
    // 当本字符和下一个字符不等时
    if (S[j] !== S[j + 1]) {
      // 拼接到ans上
      ans += S[i] + (j - i + 1);
      // 指针计数器
      i = j + 1;
    }
    j++;
  }
  ans += S[i] + (j - i + 1);
  return ans.length < S.length ? ans : S;
}

var compressString = function(S) {
  let count = 1;
  let str = new String() ;
  for(let i = 1 ; i < S.length+1 ; i++){
      if(S[i-1] === S[i]){
          count++;
      }else{
          str +=S.slice(i-1,i)+ count;
          count = 1;
      }
  }
  return S.length > str.length ? str : S;
};