// 剑指 Offer 17-E-打印从1到最大的n位数
/**
 * @param {number} n
 * @return {number[]}
 */
// 当输入n时，最大的n位数为10^n - 1
// 所以需要从1一直打印到10^n - 1
 var printNumbers = function(n) {
  let max = 10 ** n - 1;
  let result = [];
  // 循环把1一直打印到10^n - 1这些数push进数组
  for (let i = 1; i <= max; i++){
    result.push(i);
  }
  return result;
};

