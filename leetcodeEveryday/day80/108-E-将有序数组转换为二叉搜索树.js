// 108-E-将有序数组转换为二叉搜索树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 因为数组是升序的，所以取中点后左右两边差不会大于1，满足高度差的条件，前一半左子树，后一半右子树
// 时间复杂度 O(N)
// 空间复杂度 每次递归都copy了N空间 O(N^2)
 var sortedArrayToBST = function(nums) {
   if (nums.length === 0) return null;
  //  取中点
  const mid = nums.length >> 1;
  // 创建一个新树，把nums[mid]放进去
  const root = new TreeNode(nums[mid]);
  // 左子树递归
  root.left = sortedArrayToBST(nums.slice(0, mid));
  // 右子树递归
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  const mid = nums.length >> 1;
  const root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
}