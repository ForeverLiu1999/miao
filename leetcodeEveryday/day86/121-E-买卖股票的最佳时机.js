// 121-E-买卖股票的最佳时机
/**
 * @param {number[]} prices
 * @return {number}
 */

// 笨逼解法
 var maxProfit = function(prices) {
  let low = Infinity;
  let result = 0;
  for (let i  = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    result = Math.max(result, prices[i] - low);
  }
  return result;
};