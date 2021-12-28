/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
  const ret = [];
  for (let i = 0; i < numRows; i++) {
    // 用1占位
    const row = new Array(i + 1).fill(1);
    for (let j = 1; j < row.length - 1; j++) {
      // n行i个等于n-1行i-1个和i个之和
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret;
};