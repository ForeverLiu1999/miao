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
function callbackkify (promiseStyleFunc) {
  return function (...args) {
    var callback = args.pop (); // 回调函数
    promiseStyleFunc (...args).then (result => {
      callback (null, result);
    }, err => {
      callback (err);
    })
  }
}
