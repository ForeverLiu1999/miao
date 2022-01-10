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
// 重复元素必相邻，一次遍历解决
// 时间复杂度O(n)
// 空间复杂度O(1)
var deleteDuplicates = function (head) {
  // 防止head为空
  if (!head) {
    return head;
  }
  // 创建哑结点
  const dummy = new ListNode(0, head);
  let cur = dummy;
  // cur.next以及cur.next可能为空产生报错
  while (cur.next && cur.next.next) {
    // 如果有连续的值相等说明重复
    if (cur.next.val === cur.next.next.val) {
      // 用x保存cur.next
      const x = cur.next.val;
      // 知道cur.next为空或者值不等于x为止
      while (cur.next && cur.next.val === x) {
        // 删除元素值为x的节点
        cur.next = cur.next.next;
      }
    } else {
      // 下一步
      cur = cur.next;
    }
  }
  // 遍历完整个数组之后返回哑结点的下一个节点
  return dummy.next;
};

var deleteDuplicates = function (head) {
  // 防止head为空
  if (!head) {
    return head;
  }
  const dummy = new ListNode(0, head);
  let cur = dummy;
  // cur.next以及cur.next可能为空产生报错
  while (cur.next && cur.next.next) {
  // 如果有连续的值相等说明重复
    if (cur.next.val === cur.next.next.val) {
      // 用x保存cur.next
      const x = cur.next.val;
  // 直到cur.next为空或者值不等于x为止
      while (cur.next && cur.next.val === x) {
  // 删除元素值为x的节点
        cur.next = cur.next.next;
      }
    } else {
      // 下一步
      cur = cur.next;
    }
  }
  // 遍历完整个数组之后返回哑结点的下一个节点
  return dummy.next;
}