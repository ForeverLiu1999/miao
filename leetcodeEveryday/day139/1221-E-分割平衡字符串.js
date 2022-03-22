// 1221-E-分割平衡字符串
/**
 * @param {string} s
 * @return {number}
 */
// 消除法
// num为L和R的差值，如果为0，说明是平衡字符串，res++
 var balancedStringSplit = function(s) {
  let num = 0, result = 0;
  for (leti = 0; i < s.length; i++) {
    s[i] == 'L' ? num++ : num--;
    if (num == 0) res++;
  }
  return res;
};