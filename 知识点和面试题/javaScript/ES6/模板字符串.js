const person = {
  name: "小明",
  hometown: "东百",
  hobby: "狠活",
  age: "18"
};
const intro0 = "我是" + person.name + "我是" + person.hometown + "人我喜欢" + person.hobby + "今年" + person.age + "岁了。";
console.log(intro0);
// 模板字符串``
const intro1 = `我是${person.name}我是${person.hometown}人我喜欢${person.hobby}今年${person.age}岁了。`
console.log(intro1);
// 我是小明我是东百人我喜欢狠活今年18岁了。
// 我是小明我是东百人我喜欢狠活今年18岁了。

// 也可以使用表达式
const intro2 = `我今年${person.age * 2 + 1}岁了。`;
console.log(intro2);
const intro3 = `我今年是${(person >= 18) ? "成年" : "少年"}了。`;
console.log (intro3);

// 模板字符串可以换行
const intro4 = `我是${person.name}
我是${person.hometown}人我
喜欢${person.hobby}今
年${person.age}岁
了。`;
// 我是小明
// 我是东百人我
// 喜欢狠活今
// 年18岁
// 了。
console.log(`
  第一行
    第二行
      第三行
`);
// 第一行
//   第二行
//     第三行

// demo0
function calc (x) {
  return `你输入的x值为${x},x乘以2等于${x * 2},x的平方等于${x * x}`;
}
calc(3);
// '你输入的x值为3,x乘以2等于6,x的平方等于9'