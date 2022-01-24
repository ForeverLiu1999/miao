// 232-E-用栈实现队列
// 创建一个输入栈用于压入push传入的数值，再创建一个输出栈用于pop和peak操作
// 每次pop或peek时，若输出栈为空则将输入栈的全部数据依次弹出并压入输出栈
// 这样输出栈从栈顶往栈底的顺序就是队列从队首往队尾的顺序
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

MyQueue.prototype.pop = function () {
  if (!this.outStack.length) {
    this.in2out();
  }
  return this.outStack.pop();
};

MyQueue.prototype.peek = function () {
  if (!this.outStack.length) {
    this.in2out();
  }
  return this.outStack[this.outStack.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.outStack.length === 0 && this.inStack.length === 0;
};

MyQueue.prototype.in2out = function () {
  while (this.inStack.length) {
    this.outStack.push(this.inStack.pop());
  }
}