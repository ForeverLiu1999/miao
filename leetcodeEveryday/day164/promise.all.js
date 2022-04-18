Promise.all = promises => {
  return new Promise((resolve, reject) => {
    let result = [];
    var resolved = 0;
    if (promises.length == 0) {
      resolve(result);
    }
    for (let i = 0; i < promises.length; i++) {
      promise[i].then(val => {
        result[i] = val;
        resolved++;
        if (resolved == promises.length) {
          resolve(result);
        }
      }, err => {
        reject(err);
      })
    }
  })
}