// 解构赋值
// let a = 1;
// let b = 2;
// let c = 3;

// 后人：能不能一次性声明多个变量呢？
// ES6：当然可以，你看
// let [a, b, c] = [1, 2, 3];
// console.log(a, b, c); // 1 2 3

// let [d, e] = [4, 5, 6];

// let [f, [g]] = [4, [5, 6]];
// console.log(f, g); // 4 5

// let [name, age, addr = "江苏省南京市江宁区"] = ["章小飞", 18, "北京市朝阳区东四环"];
// console.log(name, age, addr); // 章小飞 18 北京市朝阳区东四环

// let i = 5;
// let j = 6;
// let temp = j;
// j = i;
// i = temp;

//有了解构赋值，我们不用像上面一样交换两个变量的值
let [i, j] = [5, 6];
[j, i] = [i, j];
console.log(i, j); // 6 5  顺利交换成功

//对象字面值解构赋值, key-value对应, 这是描述性非常好的数据结构，简洁又直观，把json内置到语言层面
let {
  userName,
  age,
  addr: address = "北京市朝阳区东四环",
} = {
  userName: "大漠穷秋",
  age: 18,
};

console.log(userName, age, addr, address); // 大漠穷秋 18 undefined 北京市朝阳区东四环 addr起了别名，原来的addr就undefined了
//在多人协作项目，比如第三方开源，如果其他人的代码中有addr，我们可以起别名，避免冲突

//字符串解构赋值    字符串被当成了数组
let [str1] = "HelloWorld";
console.log(str1); // H 本质：把字符串当成数组了，取出第0个元素

//char 是保留字 不能用作变量名

//复杂的例子 用户信息
let user = {
  userName: "damoqiongqiu",
  age: 18,
  skills: ["Java", "JS", "TS", "MySQL", "Linux"],
  phones: [
    {
      SIM: "12345678900",
      operator: "中国移动",
    },
    {
      SIM: "98765432100",
      operator: "中国联通",
    },
  ],
};

//土办法
// function printUserInfo(user) {
// console.log(user.userName);
// console.log(user.age);
// console.log(user.skills);

//这里还有一堆复杂的业务逻辑
// }

//好办法一次性把user里面的关键信息解构出来

function printUserInfo(user) {
  let {
    userName,
    age,
    skills,
    phones: [{ SIM }],
  } = user;

  //这里还有一堆复杂的业务逻辑
  console.log(userName, age, skills, SIM);
}

printUserInfo(user); //damoqiongqiu 18 [ 'Java', 'JS', 'TS', 'MySQL', 'Linux' ] 12345678900

//怎么取第二个sim卡的号码，不取第一个sim卡的号码呢？ 用数组的解构赋值
// let {userName, age, skills, phones:[, {SIM}]} = user;
