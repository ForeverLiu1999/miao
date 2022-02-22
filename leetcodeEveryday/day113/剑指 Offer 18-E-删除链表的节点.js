// 剑指 Offer 18-E-删除链表的节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var deleteNode = function(head, val) {
  // 设置哑结点
   let pre = new ListNode(-1);
   pre.next = head;
   let node = pre;
  // 当node有next存在时
  while (node.next) {
    // 如果这个节点的值等于要删除的指定节点的值
    if (node.next.val === val) {
      // 指向下一个节点
      node.next = node.next.next;
      break;
    }
    node = node.next;
  }
  return pre.next;
};