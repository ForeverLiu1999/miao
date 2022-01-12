/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 分离节点后合并
var oddEvenList = function (head) {
  // 如果链表为空，则直接返回链表
  if (!head) {
    return head;
  }
  // head是奇数链表的头节点以及结果链表的头节点
  // head的后一个节点是偶数链表的头接单
  let evenHead = head.next;
  // 维护两个指针odd和even分别指向奇偶两节点，每一步先奇数后偶数
  let odd = head,
    even = evenHead;
  // 每循环一次，完成了对一个奇数一个偶数节点的分离，当全部分离完时，odd指向最后一个奇数节点
  //     循环体内，做 4 件事：
  // 当前奇数结点 —next—> 下一个奇数结点
  // odd 指针推进 ————> 下一个奇数结点
  // 当前偶数结点 —next—> 下一个偶数结点
  // even 指针推进 ————> 下一个偶数结点
  while (even !== null && even.next !== null) {
    // 奇数节点的后一个节点需要指向偶数节点的后一个节点，也就是奇数节点逐个改next，连成奇数链
    odd.next = even.next;
    // 此时odd变成even的后一个节点
    odd = odd.next;
    // 偶数节点的后一个节点需要指向奇数节点的后一个节点，也就是偶数节点逐个改next，连成偶数链
    even.next = odd.next;
    // 此时even变成odd的后一个节点
    even = even.next;
  }
  // 奇偶链表重新拼接
  odd.next = evenHead;
  // 返回合并后链表的头
  return head;
};