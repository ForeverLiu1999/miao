// 1046-E-最后一块石头的重量
/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
   stones = stones.sort((a, b) => a - b);
  for (let i = 0; i < stones.length; i++) {
    let firstHeavyStones = stones[stones.length - 1];
    let secondHeavyStones = stones[stones.length - 2];
  }
};