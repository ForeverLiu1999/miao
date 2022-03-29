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


