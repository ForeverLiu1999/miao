// 解构赋值
// 此处为对象的解构赋值所以用{},数组的解构赋值为[].
// 获取对象的属性
const person0 = {
  name: "小明",
  sex: "male",
  age: "18"
};
// {获取的值} = 从哪里;
const { name, sex, age } = person0;
console.log(name, sex, age);

// 获取对象内对象的属性
const person1 = {
  name: "小红",
  sex: "male",
  age: "20",
  social: {
    QQ: "123",
    QQid: "bot",
    QQlevel: "1"
  }
};
const { QQ, QQid } = person1.social;
console.log(QQ, QQid);

// 同时获取对象的属性和对象内对象的属性
const person2 = {
  name: "小红",
  sex: "male",
  age: "20",
  dick: "long",
  others: {
    QQ: "123",
    QQid: "bot",
    QQlevel: "1"
  }
};
const { dick, others : {QQlevel} } = person2;
console.log(dick, QQlevel);

// 改名
const person3 = {
  name: "小红",
  others: {
    QQ: "123",
  }
};
const {
  name:person3Name,
  others : { QQ : superQQ }
} = person3;
console.log(person3Name, superQQ);

// 为解构赋值下的变量赋值加一层保险,避免程序出错.
const person4 = {
  // name: "小平",
  others: {
    height: "short",
  }
};
const {
  name : person4Name = "guest",
  others : { height : bigHeight }
} = person4;
console.log(person4Name, bigHeight);
// 如果没有name属性,则会返回 guest short.
// 如果有name属性,则会返回 小平 short.

// 数组解构赋值
const person5 = ["小强", "male", 18];
const [name5, sex5, age5] = person5;
console.log(name5, sex5, age5);
// 应用场景,得到一个长字符串,先用split(",")拆成数组,再解构赋值提出来成为一个一个变量.
const info = "小刚, female, 20";
const person6 = info.split(",");
const [name6, sex6, age6] = person6;
console.log(name6, sex6, age6);

// 常用功能:互换两个变量.
// 极大提升代码可读性,二十万次测试性能只降低一二毫秒.
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);
// 2 1
