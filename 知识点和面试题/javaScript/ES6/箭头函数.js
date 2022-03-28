// 箭头函数特点
// 1 使代码更简洁
// 2 函数返回值被隐式返回 不需要写return
// 3 不重新绑定this的值


// 一、简洁
// 命名函数,有函数名a
// 只有匿名函数才可以改写为箭头函数
function a (b) {
  return b * 2;
}
// 先改写为一个函数表达式
// const a = (b) {
//   return b * 2;
// }
// 再改写为箭头函数
// const a = (b) => {
//   return b * 2;
// }
console.log(a(3));
// 6

// 1
// 不接收参数,调用时直接返回值
const c = () => {
  console.log("HELLO");
}
c();
// 简写
const c0 = () =>console.log("HELLO0");

// 2
// 接受一个参数,拼接一个字符串
const d = (name) => {
  return "HELLO" + " " + name;
}
d("Kenny");
// 因为只有一个参数,所以可以继续简化.去掉括号.注意当没有参数或多于一个参数时是不能去掉括号的.
const d0 = name0 => {
  return "HELLO0" + " " + name0;
}
d0("Kenny0");
// 而当函数只有一行时,甚至可以把return和{}都删掉.
const d1 = name1 => "HELLO1" + " " + name1;
d1("Kenny1");

// 3
// 接受两个数字参数,返回两个参数的和
const e = (f ,g) => {
  return f + g;
}
e(2, 3);
// 5
// 简写
const e0 = (f0, g0) => f0 + g0;

// demo0
const f = g => g * g;
console.log(f(3));
// 9

// demo1
const h = ["i", "j", "k"];
const l = h.map (m => m + "...");
console.log(l);
// ['i...', 'j...', 'k...']

// demo2 筛选出数组中大于18的数字
const ages = [1, 6, 16, 19, 20];
const result = ages.filter(function (age) {
  return age > 18;
});
console.log(result);
// 改写
// const result = ages.filter(age => age > 18);
// 当函数体代码有两行及以上时,仍然可以去掉funcion在()后边加=>但是不能去掉{}


// 和传统函数的区别
// https://www.bilibili.com/video/BV14J411K7xE?p=3&spm_id_from=pageDriver
// 经典面试题:箭头函数的this
// 如果想重新绑定this就用普通函数,箭头函数不会重新绑定this.
// 比如用普通function函数写法绑定一个this的值到button上,此时改写成箭头函数,this此时就改变了指向,外层this和里边的this都指向了window,而如果再改写普通function函数写法,外层this指向window但里边this正确指向button.为了解决这个问题,可以使用that来保存this的值.
