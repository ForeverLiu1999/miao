/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// https://leetcode-cn.com/problems/reverse-linked-list/solution/shi-pin-jiang-jie-die-dai-he-di-gui-hen-hswxy/

// 迭代解法
// curr.next = prev不断迭代向前移动可以直接反转,但如果直接修改curr.next，那就找不到下一个链表节点了也就无法迭代向前移动了，所以我们需要用next存储curr.next
// 然后prev = curr，curr = next就能一直移动了
 var reverseList = function(head) {
  let prev = null;
  curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};