/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 优雅双指针
 var getKthFromEnd = function(head, k) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  // fast先移动k+1次
  for (let i = 0; i <= k; i++) {
    fast = fast.next;
  }
  // 再同时移动slow和fast
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};