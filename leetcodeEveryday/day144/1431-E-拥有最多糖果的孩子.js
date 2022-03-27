// 1431-E-拥有最多糖果的孩子
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
// 愚蠢写法未完待续
//  var kidsWithCandies = function(candies, extraCandies) {
//    let result = new Array(candies.length).fill(false);
//   let nums = candies.sort((a, b) => a - b);
//   let candiesMax = nums[nums.length - 1];
//   if (extraCandies === 1) {
//     for (let i of result) {

//     }
//   } else {
//     for (let j of result) {
//       if (candies[j] + extraCandies >= candiesMax) {
//         result[i] = true;
//       }
//     }
//   }
//   return result;
// };

// 把extraCandies加给每个人，看是否都能大于等于最大的那个
// const kidsWithCandies = (candies, extraCandies) => {
//   let max = 0;
//   for (const candie of candies) { // 找到数组中最大值
//     max = Math.max(max, candie);
//   }
//   for (let i = 0; i < candies.length; i++) { // 再循环一遍数组
//     candies[i] = (candies[i] + extraCandies >= max);
//   }
//   return candies;
// };

const kedsWithCandies = (candies, extraCandies) => {
  let max = Math.max(...candies);
  return candies.map(item => {
    return item + extraCandies >= max;
  })
}
