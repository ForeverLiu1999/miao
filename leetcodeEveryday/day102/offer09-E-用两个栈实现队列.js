// 定义两个栈，一个入队栈，一个出队栈
var CQueue = function () {
  this.stackA = [];
  this.stackB = [];
};
/**
 * @param {number} value
 * @return {void}
 *
 */

CQueue.prototype.appendTail = function (value) {
  this.stackA.push(value);
};

/**
 * @return {number}
 */

CQueue.prototype.deleteHead = function () {
  // 如果有元素存在
  if (this.stackB.length) {
    // pop出该元素
    return this.stackB.pop();
  } else {
    while (this.stackA.length) {
      this.stackB.push(this.stackA.pop());
    }
    if (!this.stackB.length) {
      return -1;
    } else {
      return this.stackB.pop();
    }
  }
};
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */