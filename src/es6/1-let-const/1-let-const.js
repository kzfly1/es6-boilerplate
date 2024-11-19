//变量, let const

//ES6之前定义变量的方式
// var str = "Hello World!";
// console.log(str);

//var 会出现诡异的作用域问题
// {
//   var userName = "大漠穷秋";
// }

//这里有400行业务代码
// var userName = "damoqiongqiu";

// console.log(userName);

// function testScope() {
//   var userName = "大漠穷秋";
// }

// console.log(userName);

//ES6全新的let关键字
// {
//   let userName = "大漠穷秋";
// }
// console.log(userName);

//变量定义：小驼峰
let userName = "大漠穷秋";
// let userName = "damoqiongqiu";

//ES6 const常量
const PI = Math.PI;
// PI = Math.PI; //不可以重复赋值
const BASE_PRICE = 1.5; //常量定义：全大写，单词之间用下划线分割

const user = {
  name: "damo",
  age: 18,
};
user.name = "damoqiongqiu";
console.log(user.name);
