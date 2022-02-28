/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归解法
// 监控上一层的深度p 使用Math.max(max, p)迭代取最大深度
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0
  const DFS = (node, p) => {
    if (!node) return null;
    max = Math.max(max, p + 1);
    node.left && DFS(node.left, p + 1);
    node.right && DFS(node.right, p + 1);
  }
  DFS(root, 0);
  return max;
};

var maxDepth = function (root) {
  if (!root) return ;
  let max = 0;
  const DFS = (node, p) => {
    if (!node) return null;
    max = Math.max(max, p + 1);
    node.left && DFS(node.left, p + 1);
    node.right && DFS(node.right, p + 1);
  }
  DFS(root, 0);
  return max;
}

// 模拟函数调用栈stack携带上层深度
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0;
  const stack = [[root, 0]];
  while (stack.length) {
    const[node, p] = stack.pop();
    max = Math.max(max, p + 1);
    node.left && stack.push([node.left, p + 1]);
    node.left && stack.push([node.right, p + 1]);
  }
  return max;
}

var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}