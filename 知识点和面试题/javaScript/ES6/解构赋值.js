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
// 如果没有name属性,则会返回 guest short
// 如果有name属性,则会返回 小平 short