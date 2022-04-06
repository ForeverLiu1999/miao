// 572-E-另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// javaScript特色算法主义解法
 var isSubtree = (root, subRoot) => (JSON.stringify(root).indexOf(JSON.stringify(subRoot))) > -1;
// 递归遍历treeA的每个节点,看看以当前节点为root的子树,是否和treeB相同
// 从根节点开始,判断整个树是否和treeB相同,不相同则递归左右子树,是否和treeB相同
// 当遍历到null节点,时钟没有返回true,则返回false
 var isSubtree = (treeA, treeB) => {
   if (treeA == null) return false;
   if (isSameTree(treeA, treeB)) return true;
   return isSubtree(treeA.left, treeB) || isSubtree(treeA.right, treeB); // 有一个true就true
 };
// isSameTree
// 两树同为null则相同
// 一个null一个不是则不同
// 两个树都不为null,则递归判断左右子树是否相同
isSameTree = (treeA, treeB) => {
  if (treeA == null && treeB == null) return true;
  if (treeA == null || treeB == null) return false;
  return treeA.val == treeB.val && isSameTree(treeA.left, treeB.left) && isSameTree(treeA.right, treeB.right);
}