// promise对异步操作进行了统一形式的封装.
// 一个promise对象代表一个异步操作的结果.
var p = new Promise((resolve, reject) => {
  getComputedStyle(url, function (data, err) {
    resolve(data);

    reject(err);
  })
})