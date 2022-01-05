/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  var seen = [];
  var p = head;
  while (p) {
    if (seen.includes(p)) {
      return true;
    }
    seen.push(p);
    p = p.next;
  }
  return false;
};