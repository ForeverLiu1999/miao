/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
// 先序遍历 根左右 所以先序遍历数组第一个数是根，而第二个数是左子树的根
// 后序遍历 左右根
 var constructFromPrePost = function(pre, post) {
  if(pre.length == 0){
      return null;
  };
  let tmp = pre[0];
  // pre[1]是先序遍历的左子树根节点
  let index = post.indexOf(pre[1]);
  // pre[0]是根
  let root = new TreeNode(tmp);
  // 左子树
  root.left = constructFromPrePost(pre.slice(1,index+2),post.slice(0,index+1)); // post.slice(0,index+1)左子树节点值
  // 右子树
  root.right = constructFromPrePost(pre.slice(index+2),post.slice(index+1,post.length-1));
  return root;
};