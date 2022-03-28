// 面试题 02.02-E-返回倒数第 k 个节点
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
 优雅双指针,快慢指针相隔k,则快指针结束时,慢指针指向倒数第k个节点
 var kthToLast = function(head, k) {
  let slow = head;
  let fast = head;
  // fast先移动 k + 1 次
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }
  // 同时移动快慢指针
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow.val;
};

//  优雅双指针,快慢指针相隔k,则快指针结束时,慢指针指向倒数第k个节点
const kthToLast = (head, k) => {
  let fast = head, slow = head;
  // 快指针先走
  while (k--) {
    fast = fast.next;
  }
//   // 同时移动快慢指针
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow.val;
}

// 创建一个数组,然后遍历链表然后push进数组,然后直接返回arr[arr.length - k]即可
var kthToLast = function (head, k) {
  const arr = [];
  // let newList = new ListNode(0, head);
  let cur = head;
  while (cur) {
    arr.push(cur.val);
    cur = cur.next;
  }
  return arr[arr.length - k];
}