/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  var seen = [];
  var p = head;
  while (p) {
    if (seen.includes(p)) {
      return p;
    }
    seen.push(p);
    p = p.next;
  }
  return null;
};
