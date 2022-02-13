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
 * @param {number} targetSum
 * @return {boolean}
 */

// 递归解法
 var hasPathSum = function (root, targetSum) {
  // 如果节点为空则不需要递归了，直接返回false
  if (root == null) return false;
  // 遍历叶子结点，如果逐步减少的目标值为零则表明寻找到一条满足条件的路径
  if (root.left == null && root.right == null) return targetSum - root.val == 0;
  // 当前递归问题拆解成两个子树的问题，只要左右子树当中任何一个有满足条件的就行
  return (
    hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
  );
};

var hasPathSum = function (root, targetSum) {
  let found = false;
  // 记录遍历过程中的路径和
  let curSum = 0;
  let traverse = (root) => {
    if (root == null) return;
    curSum += root.val;
    // 是叶子结点
    if (root.left == null && root.right == null) {
      if (curSum == targetSum) {
        found = true;
      }
    }
    traverse(root.left);
    traverse(root.right);
    curSum -= root.val;
  };
  traverse(root);
  return found;
}

var hasPathSum = function (root, targetSum) {
  let found = false;
  let curSum = 0;
  let traverse = (root) => {
    if (root == null) return;
    curSum += root.val;
    if (root.left == null && root.right == null) {
      if (curSum == targetSum) {
        found = true;
      }
    }
    traverse(root.left);
    traverse(root.right);
    curSum -= root.val;
  };
  traverse(root);
  return found;
}