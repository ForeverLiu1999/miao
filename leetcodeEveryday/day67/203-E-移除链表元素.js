/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 递归
// 链表本身很适合递归，首先对除了头节点head之外的头节点进行删除操作，然后判断head的节点值是否等于给定的val
 var removeElements = function(head, val) {
  //  递归终止条件是head为空
  if (head === null) {
    return head;
  }
  // head不为空时递归地进行删除操作，因此删除操作后的头节点是head.next
  head.next = removeElements(head.next, val);
  // 判断head的节点值是否等于val，来决定是否删除head，如果head的节点值不等于val
  // 则head保留，所以删除操作后的头节点还是head
  return head.val === val ? head.next : head;
};