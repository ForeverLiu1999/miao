/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 时间复杂度O(N)
// 空间复杂度O(N)
var invertTree = function (root) {
  // 判断根节点
  if (!root) {
    return null;
  }
  // 将当前遍历到的root的左右孩子换位置
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 深度优先递归
var invertTree = function (root) {
  if (!root) {
    return null; // 到达最底部时需要返回null,意味着空节点
  }
  // 将当前遍历到的root的左右孩子换位置
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};

// 广度优先搜索迭代
var invertTree = function (root) {
  // 判断根节点
  if (!root) {
    return null;
  }
  // 创建容器
  const nums = [];
  // 把根节点放入
  nums.push(root);
  // 当nums不为空
  while (nums.length) {
    // 弹出一个数字
    let num = nums.shift();
    // 交换左右子树
    [num.left, num.right] = [num.right, num.left];
    // 如果还存在左右孩子就说明还没到底，加入队列中
    if (num.left) {
      nums.push(num.left);
    }
    if (num.right) {
      nums.push(num.right);
    }
  }
  return root;
}