function readFilePromise (...args) {
  return new Promise ((resolve, reject) => {
    FileSystem.readFile (...args, (err, data) => {
      if (err) {
        reject (err);
      } else {
        resolve (data);
      }
    })
  })
}

// 异步递归 并没有在函数未完成前调用自己,而是在 ".then后的return" 才调用自己,此时已经是十秒以后了,异步递归不是真正的递归,不会产生调用栈爆炸
function onUserLoggedIn (id) {
  return ajax (`user/${id}`).then (user => {
    if (user.state === 'logged_in') {
      return;
    }
    return new Pomise (resolve => {
      return setTimeout ((resolve, 10 * 1000)); // 一万毫秒 = 十秒钟
    }).then (() => {
      return onUserLoggedIn (id);
    })
  })
}

// async await改写
async function f () {
  for (; ;) {
    var user = await ajax ('user/id');
    if (user.state == 'ligin') {
      return;
    } else {
      await delay (10000);
    }
  }
}

function writeFilePromse () {
  return new Promise ((resolve, reject) => {
    FileSystem.write (...args, (err, result) => {
      if (err) {
        reject (err);
      } else {
        resolve (result);
      }
    })
  })
}

// 将一个回调风格的函数转换为一个promise风格的函数
// readFileP = promisify (fs.readFile)
function prmisify (callbackBased) {
  return function (...args) {
    return new Promise ((resolve, reject) => {
      callbackBased (...args, (err, result) => {
        if (err) {
          reject (err);
        } else {
          resolve (result);
        }
      })
    })
  }
}

// 将一个promise风格的函数转换为一个回调风格的函数
function callbackify (promiseStyleFunc) {
  return function (...args) {
    var callback = args.pop (); // 回调函数
    promiseStyleFunc (...args).then (result => {
      callback (null, result);
    }, err => {
      callback (err);
    })
  }
}
