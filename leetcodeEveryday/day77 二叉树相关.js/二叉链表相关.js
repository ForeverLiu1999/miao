function createTreeNode(val) {
  var node = {
    left: null,
    val: val,
    right: null,
  }
  node.__proto__ = null
  return node
}

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

// 数组转树
function condensedAryToTree(ary) {
  var nodes = [];
  if (ary.length == 0) {
    return null
  }
  // 用数组的第一个元素创建根节点并存入节点数组
  var root = createTreeNode(ary[0]);
  nodes.push(root);
  var j = 0;

  for (let i = 0; i < ary.length; i++) {
    var current = node[j++];
    var node;

    if (ary[i] == null) {
      return null;
    } else {
      let node = createTreeNode(ary[i]);
      nodes.push(node);
    }
    current.left = node;

    i++;

    if (ary[i] == null) {
      return null;
    } else {
      let node = createTreeNode(ary[i]);
      nodes.push(node);
    }
    current.left = node;
  }
  return root;
}