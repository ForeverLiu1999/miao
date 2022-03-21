// 771-E-宝石与石头
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
// 简单粗暴暴力遍历，遍历stones中每个字母，看jewels中有没有一样的
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

// 对暴力遍历经典优化方法就是哈希集合
// 先存储后查找，可以节约时间复杂度
// 但也会导致空间复杂度提高
var numJewelsInStones = function (jewels, stones) {
  const jewelsSet = new Set(jewels.split(''));
  return stones.split('').reduce((prev, val) => {
    return prev + jewelsSet.has(val);
  }, 0);
}