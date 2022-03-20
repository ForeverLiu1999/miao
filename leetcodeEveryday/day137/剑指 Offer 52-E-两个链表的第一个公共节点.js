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
    if (visited.has(temp)) return temp;
    temp = temp.next;
  }

  // 如果遍历完了headB的链表没找到就说明不相交
  return null;
};

var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp) {
    if (visited.has(temp)) return temp;
    temp = temp.next;
  }
  return null;
}

// 双指针解法，画图更直观
// 设置两个指针分别指向headA和headB，然后同步向后移动
// 先判断是否相交
// 一相交时有两种情况
// 1如果同时结束说明指向同一个节点，说明两个链表相交前长度相等
// 2如果不同时结束，说明相交前一个长一个短，先结束的相交前子链表短，后结束的相交前子链表长
// 二不相交时有两种情况
// 长度相同和长度不相同
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  // 设置指针
  let pA = headA, pB = headB;
  // 限定遍历条件范围
  while (pA !== pB) {
    // 这个逻辑如上所述
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
}