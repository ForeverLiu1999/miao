//                  let和const   var
// 能否重复声明变量   不可以       可以
// 作用域范围         块作用域     函数作用域

// 一、重复声明问题

const a = 2;
a = a + 1;
console.log(a);
// Uncaught TypeError: Assignment to constant variable. 不能给常量赋值.
// 注意const赋值后可以通过变量对应的方法来改变，比如const定义数组,可以使用push等数组方法来改变数组

var b = 1;
// line1000
var b = 2;
// line1000
b++;
console.log(b);
// 我们期待得到2但是却得到了3,而且还不会报错,就是因为重复声明变量导致的.

// 二、作用域问题

// var的函数作用域
var c = 1;

function cPlus1() {
  c++;
}
cPlus1();
console.log(c);
// 2
function dPlus1() {
  var d = 1;
  d++;
}
dPlus1();
console.log(d);
// Uncaught ReferenceError: d is not defined
// 定义变量位置在函数外边就可以访问到,而在里边就访问不到,这就是函数作用域.
// 函数作用域里边可以访问外边,但外边无法访问里边,所以说函数作用域里边的变量叫局部变量,而放到函数作用域外边的变量就叫做全局变量.
var e = 1;

function ePlus1() {
  var e = 2;
  console.log(e);
}
ePlus1();
console.log(e);
// 2 1
// 因为首先调用函数ePlus1(),所以console的是函数作用域内的e,所以先输出2.
// 后console的是全局作用域的e,因为有同名变量情况下就近原则,无法访问函数作用域内的e,所以输出1.
var f = 1;

function fPlus1() {
  console.log(f);
}
fPlus1();
console.log(f);
// 1 1
// 而没用同名变量情况下，两次输出都是1.
var g = 1;

function gPlus1() {
  var g = 2;
  console.log(window.g);
}
gPlus1();
console.log(g);
// 1 1
// 再比如有同名情况下,不想访问函数作用域的变量,可以用window.变量来访问全局作用域的变量.

// 块作用域
// "{}"花括号内就是一个块,所以函数作用域是被包含到块作用域里的.
for (var h = 0; h < 5; h++) {}
console.log(h);
// 5
// 因为for循环不是一个函数,出了块之后依然占用这个变量名,此处用var会对全局造成污染.
for (let i = 0; i < 5; i++) {}
console.log(i);
// 5
// Uncaught ReferenceError: i is not defined
// 用let出了块作用域,变量就不存在了.
// 局部变量不去污染全局变量是非常重要的.

// javaScript函数式编程思想:变量不可变,如果一个变量不需要变化的时候,应该用const定义.而如果你要改变一个变量,则需要一个新的变量去存储它的值.

// demo0
// 用let或const改写var程序.
var j = 1;
var k = 0.1;
var l = j * (1 + k);
console.log(l);
// 解
// 所有var改成let或const都可以

// demo1
// 用let或const改写var程序,可以适当改变部分代码.
var m = 95;
if (m >= 60) {
  let n = true;
}
console.log(n);
// 错误解:定义变量的var改成let
let m = 95;
if (m >= 60) {
  let n = true;
}
console.log(n);
// n is not defined
// 只这样不够,块作用域外边访问不到里边

// 解1:再把console移进去,解决块外访问不到块内的问题,这样两个都在里边
// var m = 95;
// if (m >= 60) {
//   let n = true;
//   console.log(n);
// }
// 解2:把变量n移到外边
let m = 95;
let n;
if (m >= 60) {
  n = true;
}
console.log(n);