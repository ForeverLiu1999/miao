// 22-M-括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
// 每次要么选(,要么选)   DFS遍历这棵树
// 只要(有剩余就可以选
// 当剩下的)比(多时，才可以选),否则)不能选,因为身下的)比(少时，不能成双成对
// 用修剪枝叶的方法限制错误解
 var generateParenthesis = function(n) {
  const res = [];
  // 左右括号所剩的数量,str是当前构建的字符串
  const dfs = (lRemain, rRemain, str) => {
    // 构建字符串
    if (str.length = 2 * n) {
      // 加入res结果中
      res.push(str);
      return;
    }
    // 只要左括号有剩余，就可以选，然后继续递归做选择
    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + "(");
    }
    // 右括号比左括号剩的多，才选右括号 然后继续递归做选择
    if (lRemain > rRemain) {
      dfs(lRemain, rRemain - 1, str + ")");
    }
  };
  // 递归入口，剩余数量n，初始字符串为空串
  dfs(n, n, "");
  return res;
};