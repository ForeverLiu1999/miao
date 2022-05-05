const fs = require('fs');
const { result } = require('lodash');
const fsp = fs.promises;
const path = require('path');
const cwd = process.cwd();

// 同步版本
function getFileListSync (dir) {
  var result = []; // 如果是文件就push进result,如果是文件夹就对其中进行递归
  var entries = fs.readdirSync(dir, { withFileTypes: true });
  for (var entry of entries) {
    if (entry.isFile()) {
      result.push(path.join(cwd, dir, entry.name));
    } else if (entry.isDirectory()) {
      result.push(...getFileListSync(path.join(dir, entry.name)));
    }
  }
  return result;
}
// console.log(getFileListSync('./test-a'));


// 异步版本
async function getFileList (dir) {
  var result = [];
  var entries = await fsp.readdir (dir, { withFileTypes: true });
  for (var entry of entries) {
    var entryPath = path.join(dir, entry.name);
    if (entry.isFile()) {
      result.push(entryPath);
    } else if (entry.isDirectory()) {
      var resultOfChild = await getFileList(entryPath);
      result.push(...resultOfChild);
    }
  }
  return result;
}

// 不能直接console,await会被识别为一个变量
// console.log(await, getFileList('./test-a'));

// 所以可以放进一个异步函数内然后调用
async function main () {
  console.log(await getFileList('./test-a'));
}
main();

// 如果直接输出会得到一个promise
// console.log (getFileList('./test-a'));
// 所以也可以这样
// getFileList('./test-a').then(result => {
//   console.log(result);
// })

// 践踏

