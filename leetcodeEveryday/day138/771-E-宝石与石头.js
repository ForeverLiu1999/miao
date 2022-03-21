// 771-E-宝石与石头
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
  jewels = jewels.split('');
  return stones.split('').reduce((prev, val) => {
    for (const ch of jewels) {
      if (ch === val) {
        return prev + 1;
      }
    }
    return prev;
  }, 0);
};