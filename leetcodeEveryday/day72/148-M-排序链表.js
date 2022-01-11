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

// 简单粗暴地拆成数组再拼起来
 var sortList = function(head) {
  // 特殊情况
  if (!head) {
    return null;
  }
  let nums = [];
  while (head) {
    // t保存防提前断失联
    let t = head.next;
    // 现在断
    head.next = null;
    // 统统push进nums
    nums.push(head);
    // 现在拼上用于下次切断再push
    head = t;
  }
  // 排好
  nums.sort((a, b) => (a.val - b.val));
  // 拼成链表
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i].next = nums[i + 1];
  }
  // 返回头
  return nums[0];
};

// 归并排序，快慢指针
var sortList = function (head) {
  // 排除特殊情况
  if (!head || !head.next) {
    return head;
  }
  var p0 = head, p1 = head.next;
  // 如果p1和p1.next存在就继续遍历双指针，找中点
  while (p1 && p1.next) {
    p0 = p0.next, p1 = p1.next.next;
  }
  // 中点
  var mid = p0.next;
  // 末尾
  p0.next = null;
  // 对左右两个链表递归
  p0 = sortList(head), p1 = sortList(mid);
  // r为虚拟链表
  var n = new ListNode(0), r = n;
  // 只要有一个没完事儿,就继续遍历
  while (p0 || p1) {
    // 如果p0的值小于p1，就把p0拼到链表n上
    // 如果p0的值不小于就把p1拼到链表n上
    // !p1 || (p0 && (p0.val < p1.val)) ? (n.next = p0, p0 = p0.next) : (n.next = p1, p1 = p1.next), n = n.next;
    !p1 || (p0 && (p0.val < p1.val)) ? (n.next = p0, p0 = p0.next) : (n.next = p1, p1 = p1.next), n = n.next;
  }
  return r.next;
}

// 归并排序快慢指针
// 21合并两个有序链表，递归写法
var merge = function (list1, list2) {
  // 递归结束限制
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // 取两个链表中头节点小的那个链表的头节点,作为新的头节点指向剩下两链表的合并结果
  if (list1.val < list2.val) {
    list1.next = merge(list1.next, list2);
    return list1;
  } else {
    list2.next = merge(list1, list2.next);
    return list2;
  }
}
// 把两个子链表分别排序
const toSortList = (head, tail) => {
  if (head === null) {
      return head;
  }
  if (head.next === tail) {
      head.next = null;
      return head;
  }
  let slow = head, fast = head;
  // 快慢指针
  while (fast !== tail) {
      slow = slow.next;
      fast = fast.next;
      if (fast !== tail) {
          fast = fast.next;
      }
  }
  // 遍历完链表，慢指针位于中点
  const mid = slow;
  // 把这两个有序链表合并一起
  return merge(toSortList(head, mid), toSortList(mid, tail));
}
// 本体
var sortList = function(head) {
  return toSortList(head, null);
};