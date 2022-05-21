// 226-E-翻转二叉树
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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  if (root == null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 正宗的，出栏的，屁股有蓝戳儿的，大的，肥的，拱白菜的，待屠宰的
// 玩游戏只玩原神，买手机只买8848，吃药只吃连花清瘟，看动漫只看纳兔，学编程只用易语言，看新闻只看观察者网，看三国只粉孙十万，
// 看病只信中医，看纪录片只看《这就是中国》,报志愿只选生化环材和土木，