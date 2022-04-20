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
