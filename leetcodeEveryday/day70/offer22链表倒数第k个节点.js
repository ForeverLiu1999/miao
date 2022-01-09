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

// 第一次遍历长度，第二次取倒数k
var getKthFromEnd = function (head, k) {
  let node = head, n = 0;
  // 第一次遍历
  while (node) {
    node = node.next;
    n++;
  }
  node = head;
  // 第二次直接取n-k
  for (let i = 0; i < n - k; i++) {
    node = node.next;
  }
  return node;
}