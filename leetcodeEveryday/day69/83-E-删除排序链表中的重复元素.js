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

// 因为是有序链表，所以重复元素必相邻，所以遍历一遍链表，每个元素与其下个元素的值是否相等，如果相等就删了，不相等就下一位
 var deleteDuplicates = function(head) {
 if (!head) {
   return head;
 }
let cur = head;
while (cur && cur.next) {
  if (cur.val === cur.next.val) {
    cur.next = cur.next.next;
  }
  else {
    cur = cur.next;
  }
}
return head;
};