/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// parseInt方法直接输出
 var getDecimalValue = function(head) {
  let node = head;
  let str = '';
  // 把链表所有节点的和加起来
  while(node !== null){
      str += node.val;
      node = node.next;
  }
  return parseInt(str, 2)
};