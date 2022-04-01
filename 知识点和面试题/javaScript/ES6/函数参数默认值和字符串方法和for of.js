// 创建一个点餐函数分为food0和drink0,如果在用户只选择了food的情况,给drink添加一个默认值.
function orderEat0(food0, drink0) {
  console.log(`您点的食物是${food0},饮料是${drink0}.`);
}
orderEat0("noodle");
// 您点的食物是abc,饮料是undefined.

// 在没有函数参数默认值之前,这样做.
function orderEat1(food1, drink1) {
  // if (drink1 === undefined) drink1 = "orange";
  // drink1 = drink1 || "orange";
  console.log(`您点的食物是${food1},饮料是${drink1}.`);
}
orderEat1("beef");
// 您点的食物是beef,饮料是orange.

// ES6这样添加函数默认值
function orderEat2(food2 = "rice", drink2 = "orange") {
  console.log(`您点的食物是${food2},饮料是${drink2}.`);
}
orderEat2();
// 您点的食物是rice,饮料是orange.
orderEat2("egg");
// 您点的食物是egg,饮料是orange.
orderEat2("egg", "milk");
// 您点的食物是egg,饮料是milk.

// 而如果只想点饮料不想点主食.
function orderEat2(food2 = "rice", drink2 = "orange") {
  console.log(`您点的食物是${food2},饮料是${drink2}.`);
}
orderEat2(undefined, "milk");


// 字符串方法
// includes是否包含xxx startsWith是否以xxx开头 endsWith是否以xxx结束
const fatherString = "abcdefg";
const sonString = "cdef";
const startString = "abc";
const endString = "efg";
console.log(fatherString.includes(sonString));
// true
console.log(fatherString.startsWith(startString));
// true
// 可以加参数验证是否以第几个字符开头的
console.log(fatherString.startsWith(sonString, 2));
// true
console.log(fatherString.startsWith("b", 1));
// true
console.log(fatherString.endsWith(endString));
// 也可以加参数,但意思是指前(第二个参数)个字符是否以第一个参数结尾
console.log(fatherString.endsWith("e", 5));
// true
console.log(fatherString.endsWith("de", 5));


// for of
// 数组
const foods0 = ["food1", "food2", "food3"];
for (const [index, food] of foods0.entries()) {
  console.log(`第${index + 1}号食物是${food}`);
}
// (2) [0, 'food1']
// (2) [1, 'food2']
// (2) [2, 'food3']

// Set
const foods1 = new Set();
foods1.add("food4");
foods1.add("food5");
foods1.add("food6");
for (const food of foods1) {
  console.log(food);
}
// food4
// food5
// food6

// Map
const foods2 = new Map();
foods2.set("food7", "egg");
foods2.set("food8", "beef");
foods2.set("food9", ["suggar", "shit", "rice"]);
for (const [key, value] of foods2) {
  console.log(key, value);
}
// food7 egg
// food8 beef
// food9 (3) ['suggar', 'shit', 'rice']

// 注意!对对象内元素的遍历还是用for in,对象以外如数组、Set、Map用ES6新语法for of.
// 对象
const foods3 = {
  foods10 : "rice",
  foods11 : "nooodles",
  foods12 : "shit"
};
for (const food in foods3) {
  console.log(food, foods3[food]);
}