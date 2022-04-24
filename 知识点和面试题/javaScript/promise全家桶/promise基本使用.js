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

p.then(f1, f2)
  .then(f3)
  .then(f5, f6)
// 如果p成功而第一个参数是null,则p2取p的状态
p2 = p.then(null, f2);
// 而如果p失败了而无第二个参数,p2也取p的状态
p2 = p.then(f1);
// 所以then是否有参数不重要,完全可以不传参数,所以p2和p状态一样
p2 = p.then();

// 所以在下边例子中,如果f1抛出错误
// ".then(null, f3)"是不执行的,下一行的".then(null, f5)"也不执行
// 所以直到最后一行此时状态仍然取决于"p.then(f1, f2)"
// 所以规律是成功了就找最近的成功的
p.then(f1, f2)
  .then(null, f3)
  .then(null, f5)
  .then(f5, f6)
// 当然如果f2成功了,就直接把返回值参数给f5

// 如果f3改为失败的情况就是f1 => 第二行第二个null => 第三行的f5 第三行的f5成功走最后一行f5,失败走最后一行f6
p.then(f1, f2)
  .then(null, null)
  .then(null, f5)
  .then(f5, f6)

// 本质上第一个参数如果为null,其实就是val => val,而如果失败就是reason => {throw reson}

// promise改写try catch
try {
  var data1 = get (url);
  var data2 = get (data1.url);
  var data2 = get (data1.url);
  var data2 = get (data1.url);
  var data2 = get (data1.url);
} catch (e) {
  processerror;
}

// try时get(url)并没有运行函数,只是等到未来函数请求到时才运行这个函数,所以不会抛错.
try {
  get(url, function (err, data) {
    if (err) {
      throw err;
    } else {
      get (url2, function (err, data) {
        if (err) {
          throw err;
        } else {
          get (data.url, function (err, data) {

          })
        }
      })
    }
  })
} catch (e) {1
  processerr;
}

// 所以需要promise在一个地方处理错误
get (url).then (data => {
  return JSON.parse(data); // data中如果拿到JSON数据的话,parse返回这个对象传给then
}).then (obj => {

})


// 常见同步写法
function getJSON (url) {
  var data = get (url); // 如果get (url)请求都没请求到就会报错被try捕获到
  var obj = JSON.parse (data); // 如果请求成功但请求到的数据不是JSON格式,解析不了,所以还是会报错
  return obj;
}

// 异步,promise改写
function getJSON (url) {
  return get (url).then(JSON.parse);
}

// 都不用的写法









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
