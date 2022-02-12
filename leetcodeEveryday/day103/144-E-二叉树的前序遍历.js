// 144-E-二叉树的前序遍历
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
 * @return {number[]}
 */
// 递归
// 先序遍历中左右
 var preorderTraversal = function(root) {
   let res = [];
   const dfs = function (root) {
    if (!root) return null;
    // 从根节点开始
    res.push(root.val);
    // 递归左右
    dfs(root.left);
    dfs(root.right);
   }
   dfs(root);
   return res;
};