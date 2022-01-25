// 404-E-左叶子之和
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

//  var sumOfLeftLeaves = function(root) {
//   // 保存左叶子之和
//   let sum = 0;
//   function inner (root) {
//     if (root) {
//       // 是否满足左叶子
//       if (isSimpleNode(root.left)) {
//         // 满足就加上去，肉厚递归调用看右孩子中的左叶子情况
//         sum += root.left.val;
//         inner(root.right);
//       }
//     }
//   }
//   inner(root);
//   return sum;
// };
// // 判断函数，用来判断节点是否存在且无左右孩子
// // 如果左节点不为空，且左节点没有左右孩子，那么他就是左叶子
// function isSimpleNode (node) {
//   return node && node.left === null && node.right === null;
// }

// BFS
// 创建一个队列去遍历节点
const sumOfLeftLeaves = (root) => {
  if (root == null) return 0;
  // 左叶子和
  let sum = 0;
  // 创建队列
  const queue = [];
  // 把root push进去
  queue.push(root);
  // 队列如果存在就把节点弹出
  while (queue.length) {
    const cur = queue.shift();
    // 左右孩子入列
    if (cur.left) {
      // 如果左孩子节点是左叶子节点就把值加到sum上
      if (cur.left.left == null && cur.left.right == null) {
        sum += cur.left.val;
      } else {
        queue.push(cur.left);
      }
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return sum;
}