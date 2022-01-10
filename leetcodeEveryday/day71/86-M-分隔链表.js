/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 创建链表然后遍历
// 失败
// var partition = function (head, x) {
//   // 创建虚拟节点pApB，和两个链表ab
//   let pA = a = ListNode(0);
//   let pB = b = ListNode(0);
//   // 如果head存在
//   while (head) {
//     // 值小于x的加入a链表
//     if (head.val < x) {
//       a = a.next = head;
//       // 值大于x的加入b链表
//     } else if (head.val > x) {
//       b = b.next = head;
//     }
//     // 下一步
//     head = head.next;
//   }
//   // a是在a链表尾部，所以连上b链表的头
//   a.next = pB.next;
//   // 而b是B链表的尾，所以连上null
//   b.next = null;
//   // 返回虚拟节点pA的next就是新链表
//   return pA.next;
// };

var partition = function(head, x) {
  // 创建虚拟节点pApB，和两个链表ab
  let pA = a = new ListNode(0), pB = b = new ListNode(0);
  while (head) {
    // 值小于x的加入a链表,值大于x的加入b链表
      head.val < x ? a = a.next = head : b = b.next = head;
    // 下一步
      head = head.next;
  }
  // a是在a链表尾部，所以连上b链表的头
  a.next = pB.next;
  // 而b是B链表的尾，所以连上null
  b.next = null;
  // 返回虚拟节点pA的next就是新链表
  return pA.next;
};

var partition = function (head, x) {
  // 创建数组a和b
  let a = [], b = [], i = 0;
  // 当head存在
  while (head) {
    // 小于x放入数组a
    if (head.val < x) {
      a.push(head);
      head = head.next;
      // 大于x放入数组b1
    } else if (head.val >= x) {
      b.push(head);
      head = head.next;
    }
  }
  // 如果a没东西，说明都在b1111111111111111111111111111111111111111111111111111111111
  if (a.length === 0) {
    return b[0] || head;
  }
  // a[i - 1].next = a[i]是正常拼接链表节点，或b[0]是指遍历完a之后拼接b
  while (++i <= a.length) {
    a[i - 1].next = a[i] || b[0] || null;
  }
  // 拼完a拼b同理
  for (i = 1; i <= b.length; i++) {
    b[i - 1].next = b[i] || null;
  }
  return a[0];
}