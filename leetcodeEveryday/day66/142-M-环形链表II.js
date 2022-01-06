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
// 数组存
// 寻找环的入口,笨比方法用数组存节点,判断有没有遇到,如果遇到了就返回对应的节点
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

// 哈希表存
// 寻找环的入口,笨比方法用哈希表存节点,判断有没有遇到,如果遇到了就返回对应的节点
// 时间复杂度O(n)
// 空间复杂度O(n)
var detectCycle = function (head) {
  const visited = new Set();
  while (head !== null) {
    if (visited.has(head)) {
      return head;
    }
    visited.add(head);
    head = head.next;
  }
  return null;
}

// 双指针，在环内快指针追慢指针，而且快的每轮距离慢的越来越近，每轮近一个格子
// 从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点
// 从相遇点到入环点的距离加上 n-1 圈的环长，恰好等于从链表头部到入环点的距离。
// 解释：为何慢指针第一圈走不完一定会和快指针相遇： 首先，第一步，快指针先进入环
// 第二步：当慢指针刚到达环的入口时，快指针此时在环中的某个位置(也可能此时相遇)
// 第三步：设此时快指针和慢指针距离为x，若在第二步相遇，则x = 0
// 第四步：设环的周长为n，那么看成快指针追赶慢指针，需要追赶n-x
// 第五步：快指针每次都追赶慢指针1个单位，设慢指针速度1/s，快指针2/s，那么追赶需要(n-x)s
// 第六步：在n-x秒内，慢指针走了n-x单位，因为x>=0，则慢指针走的路程小于等于n，即走不完一圈就和快指针相遇
var detectCycle = function (head) {
  // 判断头节点为空的情况
  if (head === null) {
    return null;
  }
  // 快慢指针同时从头节点开始
  let slow = head, fast = head;
  while (fast !== null) {
    // 慢指针一轮走一步
    slow = slow.next;
    if (fast.next !== null) {
      // 快指针一轮走两步
      fast = fast.next.next;
    } else {
      return null;
    }
    // 如果快慢指针相遇说明是环形链表
    if (fast === slow) {
      // 额外使用指针ptr，起始指向链表头部
      let ptr = head;
      // 然后ptr和slow每次移动一个位置，最终会相遇
      while (ptr !== slow) {
        ptr = ptr.next;
        slow =slow.next;
      }
      // 返回相遇点
      return ptr;
    }
  }
  return null;
}