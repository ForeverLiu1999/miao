// 剑指 Offer 52-E-两个链表的第一个公共节点
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
// 用哈希表存储一个链表，然后检查第二个链表，把第二个链表每个节点和哈希表一一对比，寻找交点，如果没找到就返回null
// 时间复杂度O(两链表长度之和)
// 空间复杂度O(链表一的长度)
 var getIntersectionNode = function(headA, headB) {
  const visited = new Set();
  // 头指针
  let temp = headA;
  // 限定遍历范围
  while (temp) {
    // 把所有元素加入visited中
    visited.add(temp);
    temp = temp.next;
  }
  // 头指针
  temp = headB;
  // 限定遍历范围
  while (temp) {
    // 把所有元素加入visited中
    visited.has(temp);
    return temp.next;
  }
  // 如果遍历完了headB的链表没找到就说明不相交
  return null;
};