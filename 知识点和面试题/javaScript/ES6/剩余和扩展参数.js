// 剩余,把多个打包成一个.
const fruit0 = ["apple0", "banana0", "orange0", "shit0"];
// 目标把苹果放入loveFruit变量中,把banana放入likeFruit变量中,把剩余水果放入normalFruit变量中.
const [loveFruit0, likeFruit0, normalFruit0] = fruit0;
console.log(loveFruit0, likeFruit0, normalFruit0);
// apple0 banana0 orange0
// 这样写的话,normalFruit里只有一个orange,但我们希望他包含除loveFruit和likeFruit以外所有的数组元素.
const fruit1 = ["apple1", "banana1", "orange1", "shit1"];
// 目标把苹果放入loveFruit变量中,把banana放入likeFruit变量中,把剩余水果放入normalFruit变量中.
const [loveFruit1, likeFruit1, ...normalFruit1] = fruit1;
console.log(loveFruit1, likeFruit1, normalFruit1);
// apple1 banana1 (2) ['orange1', 'shit1']
// 所以用...可以表示剩余所有变量

// 要求写一个函数不管多少个参数都要从小到大排序
function sortNumbers (...nums) {
  if (nums.length === 0) return [];
  else {
    return nums.sort((a, b) => a - b);
  }
}
console.log(sortNumbers(432, 23, 55, 11, 24, 66));

// 扩展,把一个拆成多个.
const loveFruit2 = "apple2";
const likeFruit2 = "banana2";
const normalFruit2 = ["orange2", "shit2"];
const fruit2 = [loveFruit2, likeFruit2, ...normalFruit2];
console.log(fruit2);

// 合并两个数组
const foods = ["food1", "food2", "food3"];
const drinks = ["drink1", "drink2", "drink3"];
const eat1 = foods.concat(drinks);
console.log(eat1);
// ['food1', 'food2', 'food3', 'drink1', 'drink2', 'drink3']
const eat2 = [...foods, ...drinks];
console.log(eat2);
// ['food1', 'food2', 'food3', 'drink1', 'drink2', 'drink3']
const eat3 = ["food0", ...foods, "food4", "food5", "drink0", ...drinks, "drink4"];
console.log(eat3);
