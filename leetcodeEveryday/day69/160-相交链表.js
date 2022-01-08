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
// 时间复杂度O(headA.length+headB.length)
// 空间复杂度O(headA.length)
// 用哈希集合存储链表A所有节点，然后遍历headB，看每个节点是否在哈希集合中
var getIntersectionNode = function (headA, headB) {
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

// 双指针
// 时间复杂度O(headA.length+headB.length)
// 空间复杂度O(1)
// 都链表不为空，创建两个头指针pA和pB，如果当前节点不为空就指向下一个节点，pA遍历完headA就去遍历headB,pB遍历完headB就去遍历headA
// 如果两指针同时为null说明不相交，没有公共节点，如果pA等于pB说明找到交点
var getIntersectionNode = function (headA, headB) {
  // 如果两个链表至少有一个为null，直接返回null
  if (headA === null || headB === null) {
    return null;
  }
  // 定义双指针
  let pA = headA,
    pB = headB;
  // 当pA不等于pB时执行循环
  while (pA !== pB) {
    // pA和pB是否遍历完了headA和headB，如果遍历完了就遍历对方的链表
    pA = (pA === null) ? headB : pA.next;
    pB = (pB === null) ? headA : pB.next;
  }
  // 最终相遇，就是相交点
  return pA;
}

var getIntersectionNode = function (headA, headB) {
  // 如果两个链表至少有一个为null，直接返回null
  if (headA === null || headB === null) {
    return null;
  }
  // 定义双指针
  let pA = headA,
    pB = headB;
  // pA和pB是否遍历完了headA和headB，如果遍历完了就遍历对方的链表
  while (pA !== pB) {
    if (pA !== null) {
      pA = pA.next;
    } else {
      pA = headB;
    }
    if (pB !== null) {
      pB = pB.next;
    } else {
      pB = headA;
    }
  }
  // 说明相遇了
  if (pA === pB) {
    return pA;
  }
}