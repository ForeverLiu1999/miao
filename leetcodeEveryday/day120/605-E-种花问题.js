// 605-E-种花问题
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// 正则解法
 var canPlaceFlowers = function(flowerbed, n) {
  return Array.from(flowerbed.join('').matchAll(/(^0(?=00)|^00|00$|00(?=00)|000|^0$)/g)).length >= n
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