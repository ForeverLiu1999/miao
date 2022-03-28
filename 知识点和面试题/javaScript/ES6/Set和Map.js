// Set
// Set内的值不重复
const numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
console.log(numberSet);
console.log(numberSet);
// {1 2 3}
numberSet.add(3);
console.log(numberSet);
// {1 2 3}
numberSet.delete(3);
// true
// 说明1在numberSet中存在,也已经被删除掉了.
console.log(numberSet);
// {1 2}
numberSet.delete(4);
// false
// 说明1在numberSet中不存在,也无法被删掉.
console.log(numberSet);
// {1 2}
numberSet.has(1);
// true
// 说明numberSet中存在1
numberSet.has(3);
// false
// 说明numberSet中不存在3
numberSet.size;
// 2

// Map
// Map和对象很相似
const person = new Map();
// 添加属性用set
person.set("name", "小明");
person.set("sex", "男");
person.set("age", "18");
person.set("hobby", ["打胶", "打胶", "打胶"]);
console.log(person);
// Map(4) {'name' => '小明', 'sex' => '男', 'age' => '18', 'hobby' => Array(3)}
// 0: {"name" => "小明"}
// 1: {"sex" => "男"}
// 2: {"age" => "18"}
// 3: {"hobby" => Array(3)}
// key: "hobby"
// value: (3) ['打胶', '打胶', '打胶']
// size: 4
// 查询属性用get
person.get("name");
// '小明'
person.get("hobby");
// ['打胶', '打胶', '打胶']
person.size;
// 4
person.has("age");
// true
person.has("18");
// false
person.has("city");
// false
person.set("age", 23);
// Map(4) {'name' => '小明', 'sex' => '男', 'age' => 23, 'hobby' => Array(3)}
// 如果set一个已有属性和值,会覆盖而不会创建新的.
person.delete("age");
// true
console.log(person);
// Map(3) {'name' => '小明', 'sex' => '男', 'hobby' => Array(3)}

