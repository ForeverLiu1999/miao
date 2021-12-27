/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const n = s.length;
  let i = 0;
  let res = 0;
  while(i < n) {
    if (s[i] === 'M') {
      res += 1000;
      i++;
    } else if (s[i] === 'C' && s[i+1] === 'M') {
      res += 900; // C在M左
      i += 2;
    } else if (s[i] === 'D') {
      res += 500; // 只有D
      i++;
    } else if (s[i] === 'C' && s[i+1] === 'D') {
      res += 400; // C在D左
      i += 2;
    } else if (s[i] === 'C') {
      res += 100; // 只有C
      i++;
    } else if (s[i] === 'X' && s[i+1] === 'C') {
      res += 90; // X在C左
      i += 2;
    } else if (s[i] === 'L') {
      res += 50; // 只有L
      i++;
    } else if (s[i] === 'X' && s[i+1] === 'L') {
      res += 40; // X在L左
      i += 2;
    } else if (s[i] === 'X') {
      res += 10; // 只有X
      i++;
    } else if (s[i] === 'I' && s[i+1] === 'X') {
      res += 9; // I在X左
      i += 2;
    } else if (s[i] === 'V') {
      res += 5; // 只有V
      i++;
    } else if (s[i] === 'I' && s[i+1] === 'V') {
      res += 4; // I在V左
      i += 2;
    } else if (s[i] === 'I') {
      res += 1; // 只有I
      i++;
    }
  }
  return res;
};