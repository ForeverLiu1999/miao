/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 把链表内的节点放入数组中再双指针判断
// 时间复杂度O(n)
// 空间复杂度O(n)
 var isPalindrome = function(head) {
   // 创建数组
  const nums = [];
  // 把链表所有节点放入数组中
  while (head !== null) {
    nums.push(head.val);
    head = head.next;
  }
  // 双指针，i指向首，j指向尾，向中间移动来判断回文
  for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
    // 一旦不成立则返回false
    if (nums[i] !== nums[j]) {
      return false;
    }
  }
  return true;
};

// 定义一个函数用来反转链表
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev;
}
// 快指针一次两步，慢指针一次一步，当快指针在链表末尾时，慢指针在链表中间，所以慢指针把链表分成两部分
const endOfFirstHalf = (head) => {
  let fast = head;
  let slow = head;
  while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
}

var isPalindrome = function(head) {
  if (head == null) return true;

  // 找到前半部分链表的尾节点并反转后半部分链表
  const firstHalfEnd = endOfFirstHalf(head);
  const secondHalfStart = reverseList(firstHalfEnd.next);

  // 判断是否回文
  let p1 = head;
  let p2 = secondHalfStart;
  let result = true;
  while (result && p2 != null) {
      if (p1.val != p2.val) result = false;
      p1 = p1.next;
      p2 = p2.next;
  }

  // 还原链表并返回结果
  firstHalfEnd.next = reverseList(secondHalfStart);
  return result;
};