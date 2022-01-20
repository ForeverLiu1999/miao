// 450-M-删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function (root, key) {
  //  情况一 说明没找到要删除的节点，返回空
  if (!root) return root;
  // 隐含情况二 左右孩子都为空 直接删除节点 返回null为根节点

  if (root.val === key) {
    // 删除节点的左孩子为空但右孩子不为空，删除节点，右孩子补位，返回右孩子为根节点
      if (!root.left) return root.right;
    // 删除节点的右孩子为空但左孩子不为空，删除节点，左孩子补位，返回左孩子为根节点
      else if (!root.right) return root.left;
      // 情况五 左右孩子都不为空，则将删除节点的左子树头节点(左孩子)放到删除节点的右子树的最左面节点的左孩子上
      // 返回删除节点右孩子为新的根节点
      else {
          let cur = root.right;
          while (cur.left) {
              cur = cur.left;
          }
          cur.left = root.left;
          root = root.right;
          delete root;
          return root;
      }
  }
  // 通过递归返回值删除节点
  if (root.val > key)
      root.left = deleteNode(root.left, key);
  if (root.val < key)
      root.right = deleteNode(root.right, key);
  return root;
};