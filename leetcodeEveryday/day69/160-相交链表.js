/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希集合
// 用哈希集合存储链表A所有节点，然后遍历headB，看每个节点是否在哈希集合中
 var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  let temp = headA;
  // 把链表headA的每个节点都加入哈希集合visited中
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  // 遍历headB所有节点，第一个在哈希集合中的节点就是两个链表相交的节点，返回此节点
  while (temp !== null) {
    if (visited.has(temp)) {
      return temp;
    }
    temp = temp.next;
  }
  // 如果返回null说明headB中所有节点都不在哈希集合visited中，所以两个链表不相交
  return null;
};