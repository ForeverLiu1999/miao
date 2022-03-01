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