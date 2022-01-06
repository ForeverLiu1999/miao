/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 设链表长度n，向右移动k>=n时，仅需移动k%n次即可，新链表最后一个节点为原链表的第(n-1)-(k%n)个节点

 var rotateRight = function(head, k) {
  // 排除特殊情况如k等于0时，头节点不存在，链表长度为1
  if (k === 0 || !head || !head.next) {
    return head;
  }
  // 初始化长度
  let n = 1;
  let cur = head;
  // 遍历右移，n++，n得到链表长度，而此时cur是原链表结尾
  while (cur.next) {
    cur = cur.next;
    n++;
  }
  // 新链表最后一个节点也是原链表第(n-1)-(k%n)个节点
  let add = n - k % n;
  // 说明k%n为0，k为n的倍数，此时新链表与原链表相同，不需处理
  if (add === n) {
    return head;
  }
  // 原链表结尾与头相连，得到了闭合为环的链表
  cur.next = head;
  // 找到新链表最后一个节点，将闭合为环的链表断开，可以得到结果
  while (add) {
    cur = cur.next;
    add--;
  }
// ret存储了断开的cur的
const ret =cur.next;
cur.next = null;
// 返回ret
return ret;
};