// 25-H-K 个一组翻转链表
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

// myReverse函数用于反转从head到tail的链表
 var myReverse = (head, tail) => {
  let prev = tail.next;
  let p = head;
  // 反转链表经典一切为了cur.next = prev,为了防止链表断裂找不到,所以需要存储到next = cur.next
  // 所以反转链表核心四行代码
  // next = cur.next;
  // cur.next = prev;
  // prev = cur;
  // cur = next;
  while (prev !== tail) {
    const nex = p.next; // 用nex存储p.next
    p.next = prev;
    prev = p;
    p = nex;
  }
  return [tail, head];
};
var reverseKGroup = (head, k) => {
  // 创建hair指向head,经典哑节点
  const hair = new ListNode(0);
  hair.next = head;
  let pre = hair;
  while (head) {
    let tail = pre;
    // 查看剩余部分长度是否大于等于k
    for (let i = 0; i < k; ++i) {
      tail = tail.next;
      if (!tail) {
        return hair.next;
      }
    }
    const nex = tail.next;
    [head, tail] = myReverse(head, tail);
    // 把子链表重新接回原链表
    pre.next = head;
    tail.next = nex;
    pre = tail;
    head = tail.next;
  }
  return hair.next;
}