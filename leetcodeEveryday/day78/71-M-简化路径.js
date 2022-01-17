/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
  // 将路径切成若干字符串组成的列表
  // 其中只有 空字符串,.,..,目录名(其中为数组字母下划线)
  const nums = path.split("/");
  // 用栈维护目录名
  const stack = [];
  for (const num of nums) {
  // 而..则让目录返回上一级，只要栈不为空就pop栈顶，而遇到目录名就入栈
    if (num === "..") {
      if (stack.length) {
        stack.pop();
      }
  // 空字符串和.不用管
    } else if (num.length && num !== ".") {
      stack.push(num);
    }
  }
  // 所以只需遍历每个字符串，然后所有字符串用/连接，再加一个/表示根目录
  return "/" + stack.join("/");
};