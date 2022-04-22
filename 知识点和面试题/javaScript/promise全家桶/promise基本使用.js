// promise对异步操作进行了统一形式的封装.
// 一个promise对象代表一个异步操作的结果.
var a = new Promise(
  (resolve, reject) => {
    get(url, function (data, err) {
      resolve(data);

      reject(err);
    })
  }
)

var b = new Promise(
  function (resolve, reject) {
    setTimeout(() => {
      resolve(0);
    }, 3000);
  })
  b.then((value) => {
    console.log("true:" + value + 1);
  }, (reason) => {
    console.log("false:" + value + 2);
  })

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





function race(promises) {
  return new Promise((resolve, reject) => {
    for (var p of promises) {
      p.then(resolve, reject);
    }
  })
}

function any(promises) {

}

function allSettled(promises) {

}
