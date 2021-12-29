/**
 * @param {number[]} candyType
 * @return {number}
 */

// 糖果数量n，妹妹只能分到一半的糖果，所以答案不会超过n/2
// 设糖果一共m种，答案不会超过m
// if m<=n/2，则有每种糖果至少分一颗给妹妹，答案为m
// if m>/2，妹妹只能分到n/2种糖果，没种糖果分一颗，答案为n/2
// 答案为min(m,n/2)
 var distributeCandies = function(candyType) {
  const set = new Set(candyType);
  return Math.min(set.size, candyType.length / 2);
};