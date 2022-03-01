// 605-E-种花问题
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 正则解法
 var canPlaceFlowers = function(flowerbed, n) {
  return Array.from(flowerbed.join('').matchAll(/(^0(?=00)|^00|00$|00(?=00)|000|^0$)/g)).length >= n;
};

// 扫描解法
// 只有 前+中+后 不为1才能在中种花，而且i++的下一个位置也不能种花
var canPlaceFlowers = function (flowerbed, n) {
  if (!n) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i - 1] != 1 && flowerbed[i] != 1 && flowerbed[i + 1] != 1) {
      if (--n) return true;
      i++;
    }
    return false;
  }
}

// 贪心优化
// 原数组前后种花 1 0 原数组 0 1
var canPlaceFlowers = function (flowerbed, n) {
  let p = -2, i = -1, r = 0;
  while (++i < flowerbed.length) {
    if (flowerbed[i]) {
      if ((r += (i - p - 2) >> 1) >= n) return true;
      p = i;
    }
    r += (i + 1 - p - 2) >> 1;
    return r >= n;
  }
}