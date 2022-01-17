/**
 * @param {string[]} tokens
 * @return {number}
 */

// 逆波兰表达式:把符号往后放，没有括号，运算符总是放在和它相关的操作数之后。因此，逆波兰表达式也称后缀表达式。
//逆波兰表达式严格遵循「从左到右」的运算。计算逆波兰表达式的值时，使用一个栈存储操作数，从左到右遍历逆波兰表达式，进行如下操作：
// 如果遇到操作数，则将操作数入栈；
// 如果遇到运算符，则将两个操作数出栈，其中先出栈的是右操作数，后出栈的是左操作数，使用运算符对两个操作数进行运算，将运算得到的新操作数入栈。
// 整个逆波兰表达式遍历完毕之后，栈内只有一个元素，该元素即为逆波兰表达式的值。
// 注意，乘除法不满足交换律，所以要注意两个操作数的关系
 var evalRPN = function(tokens) {
  const stack = [];
  const l = tokens.length;
  for (let i = 0; i < l; i++) {
    const token = tokens[i];
    // 不可以!a||!b||!c||!d，这和!(a||b||c||d)不一样
    if (!(token === "+" || token === "-" || token === "*" || token === "/")) {
      stack.push(parseInt(token));
    } else {
      // 先出的是num2，后出的是num1
      const num2 = stack.pop();
      const num1 = stack.pop();
      // 分别处理加减乘除，注意除法特殊情况
      if (token === "+") {
        stack.push(num1 + num2);
      } else if (token === "-") {
        stack.push(num1 - num2);
      } else if (token === "*") {
        stack.push(num1 * num2);
      } else if (token === "/") {
        stack.push(num1 / num2 > 0 ? Math.floor(num1 / num2) : Math.ceil(num1 / num2));
      }
    }
  }
  return stack.pop();
};