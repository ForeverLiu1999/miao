/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 双指针
// 添加哑节点就可以不用去单独对头结点进行特殊的判断了
// 所以从哑结点开始遍历到L-N+1时,下一个节点就是需要删除的节点
 var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  // fast移动n+1次
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  // 同时移动slow,fast
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  // 删除元素
  slow.next = slow.next.next;
  return dummy.next;
};