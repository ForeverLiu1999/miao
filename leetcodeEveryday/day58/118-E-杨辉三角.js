/**
 * @param {number} numRows
 * @return {number[][]}
 */
//  var generate = function(numRows) {
//   const ret = [];
//   for (let i = 0; i < numRows; i++) {
//     // 用1占位
//     const row = new Array(i + 1).fill(1);
//     for (let j = 1; j < row.length - 1; j++) {
//       // n行i个等于n-1行i-1个和i个之和
//       row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
//     }
//     ret.push(row);
//   }
//   return ret;
// };


 var generate = function(numRows) {
  const res = [[1]];
  let row = [];
  for(let i=2; i<=numRows; i++) {
      const last = res[res.length-1];
      for(let j=0; j<i; j++) {
          if(j===0){  //如果是当前层的第一个数  赋值1
              row.push(1);
          }else if(j===i-1){ //如果是当前层的最后一个数  赋值1；
              row.push(1);
              res.push(row.slice());
              row = []
          }else{   //否则 赋值为 前一层的前一位加当前位的数之和；
              row.push(last[j-1]+ last[j])
          }
      }
  }
  return res;
};