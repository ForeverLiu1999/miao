// Promise
// 同步执行,构造函数直接调用还没返回,所以先输出1,函数执行完毕才输出2
var c = new Promise(
  function (resolve, reject) {
    console.log(1);
    setTimeout(() => {
      reject(2);
    }, 3000);
  });
console.log(2);
// 三秒后输出"VM39:5 Uncaught (in promise) 2"
// 因为没绑定失败的回调所以返回这个,说明没有处理错误

// 但promise的回调函数是异步执行的,所以要运行完再执行回调函数.
c.then(null, (reason) => {
  console.log(1);
});
console.log(2);
// 2 1


// setTimeout
for (var i = 0; i < 5; i++) {
  let j = i;
  setTimeout(function () {
    console.log(j);
  }, 1000);
}
// 一秒后一次性输出0 1 2 3 4,因为五次循环瞬间执行完成,setTimeout只是在一秒后一起输出
// 因为是let所以每个j不同

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 一秒后一次性输出5 5 5 5 5,因为五次循环瞬间执行完成,setTimeout只是在一秒后一起输出
// 但这次不同的是没有let定义,而是用var,所以所有i相同,取最后一次循环的结果5

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
// 同第一种,一秒后一次性输出0 1 2 3 4

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * (i + 1));
}
// 这样可以每隔一秒输出一个,0 1 2 3 4

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * (i + 1));
}
// 而这样可以每隔一秒输出一个,5 5 5 5 5

// 那如何用var情况下也能隔一秒输出0 1 2 3 4
// 把整段代码放入函数
for (var i = 0; i < 5; i++) { // 外边的i是实参,传到里边变成形参
  (function (i) { // 这个匿名函数的运行会创建一个作用域
    setTimeout(function () {
      console.log(i);
    }, 1000 * (i + 1));
  }) (i);
}
// 同上