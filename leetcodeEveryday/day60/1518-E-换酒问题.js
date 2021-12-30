/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

var numWaterBottles = function (numBottles, numExchange) {
  // ans是喝到的酒的瓶数，第一轮一定可以喝到numBottles瓶数的酒
  let bottle = numBottles, ans = numBottles;
  // 只要有多的够换酒就继续循环
  while (bottle >= numExchange) {
    // 总瓶子数-换一瓶需要的空瓶子数
    bottle -= numExchange;
    // 换到了一瓶喝掉
    ++ans;
    // 瓶子+1
    ++bottle;
  }
  return ans;
};