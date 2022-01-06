/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// 将要删除的节点a的下一个节点b的值赋给a，然后删除b就行了
 var deleteNode = function (node) {
  // 给a赋值
  node.val = node.next.val;
  // 删除b
  node.next = node.next.next;
}