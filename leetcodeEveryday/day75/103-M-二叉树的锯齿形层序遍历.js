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
 * @return {number[][]}
 */

var zigzagLevelOrder = function (root) {
  const res = [];
  if (root == null) {
    return res;
  }
  // 存储当前层的节点
  let curLevel = [root];
  while(curLevel.length) {
    // 存放下一层的节点
    const nextLevel = [];
    // 存放当前层的节点值
    const curLevelVals = [];
    for (const node of curLevel) {
      // 遍历当前层，将节点的值push进curLevelVals
      curLevelVals.push(node.val);
      // 然后把左右孩子节点push进下一层nextLevel中
      node.left && nextLevel.push(node.left);
      node.right && nextLevel.push(node.right);
    }
    // 当前层遍历结束，把整个层加入res
    res.push(curLevelVals);
    // 偶数层反转
    res.length % 2 == 0 && curLevelVals.reverse();
    // 更新
    curLevel = nextLevel;
  }
  return res;
}