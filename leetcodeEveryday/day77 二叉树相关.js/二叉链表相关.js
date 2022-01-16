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