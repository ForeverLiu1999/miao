// 将使用顺序数组存放的根节点在rootPos位置的二叉树转换为二叉链表
function aryToTree(ary, rootPos = 0) {
  if (ary[rootPos] == null) {
    return null;
  }
  var rootNode = createTreeNode(ary[rootPos]);
  var leftPos = rootPos * 2 + 1;
  var rightPos = rootPos * 2 + 2;
  var leftTree = aryToTree(ary, leftPos);
  var rightTree = aryToTree(ary, rightPos);
  rootNode.left = leftTree;
  rootNode.right = rightTree;
  return rootNode;
}

// 树转换为数组
function treeToAry(tree, index = 0, ary = []) {
  // 简写，隐式地包含了if (!tree) {
  // return ary;
  // }
  if (tree) {
    ary[index] = tree.val; // 将根节点放入对应位置
    treeToAry(tree.left, index * 2 + 1, ary); // 将左子树放入
    treeToAry(tree.right, index * 2 + 2, ary); // 将右子树放入
  }
  return ary;
}