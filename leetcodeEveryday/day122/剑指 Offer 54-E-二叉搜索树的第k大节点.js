// 剑指 Offer 54-E-二叉搜索树的第k大节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 解法一 递归处理放进数组 然后sort一下找第k大的节点
 var kthLargest = function(root, k) {
  // 创建一个set
  let setArray = new Set();
  // 创建递归dfs函数
  const dfs = function (node) {
    if (node === null) {
      return;
    }
    setArray.add(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  // 递归入口
  dfs(root);
  // 转化为数组
  let array = [...setArray];
  // 无情粗暴排序
  array.sort((a, b) => {
    return b - a;
  })
  return array[k - 1];
};