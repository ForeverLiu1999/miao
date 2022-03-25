// 1103-E-分糖果 II
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */

const distributeCandies = (candies, num_people) => {
  // 1. 初始化为 num_people 长度的所有元素为 0 的数组
  // const result = Array.from(Array(num_people), () => 0);
  let result = new Array(num_people).fill(0);
  // 2. 设置当前需要派发的糖果
  let distribute = 1;
  // 3. 轮流排队的小朋友
  let people = 0;
  // 4. 如果糖果还有剩余
  while (candies) {
    // 4.1 如果剩余糖果数 > 需要派发的糖果数
    if (candies > distribute) {
      result[people] += distribute;
      candies -= distribute;
    } else {
      // 4.2 如果剩余糖果数 < 需要派发的糖果数
      result[people] += candies;
      candies = 0;
    }
    // 4.3 设置下一步
    distribute++; // 分配糖果数 + 1
    // 小朋友位置变化
    if (people + 1 === result.length) {
      people = 0;
    } else {
      people++;
    }
  }
  // 5. 返回结果
  return result;
};

// var distributeCandies = (candies, num_people) => {
//   let result = new Array(num_people).fill(0);
//   let distribute = 1;
//   let people = 0;
//   while (candies) {
//     if (candies > distribute) {
//       result[people] += distribute;
//       candies -= distribute;
//     } else {
//       result[people] += candies;
//       candies = 0;
//     }
//     distribute++;
//     if (people + 1 === result.length) {
//       people = 0;
//     } else {
//       people;
//     }
//   }
//   return result;
// }
