// 543-E-二叉树的直径
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
 * @return {number}
 */
// 二叉树直径 = 左子树最长路径 + 右子树最长路径 + 1
// 通过递归获得二叉树的左右子树最长路径
 var diameterOfBinaryTree = function(root) {
  // 默认根节点具有长度1
   let ans = 1;
  function depth (rootNode) {
    if (!rootNode) {
      return 0;
    }
    // 递归获取左右子树
    let L = depth(rootNode.left);
    let R = depth(rootNode.right);
    /* 关键点1
        L+R+1的公式是如何而来？
        等同于：左子树深度(节点个数) + 右子树深度（节点个数） + 1个根节点
        便是这株二叉树从最左侧叶子节点到最右侧叶子节点的最长路径
        类似于平衡二叉树的最小值节点到最大值节点的最长路径
        之所以+1是因为需要经过根节点
         */
        // 获取该树的最长路径和现有最长路径中最大的那个
        ans = Math.max(ans, L + R + 1);
        /* 关键点2
        已知根节点的左右子树的深度，
        则，左右子树深度的最大值 + 1，
        便是以根节点为数的最大深度*/
        return Math.max(L, R) + 1;
  }
  depth(root);
  // 由于depth函数中已经包含了根节点，所以需要-1
  return ans - 1;
};