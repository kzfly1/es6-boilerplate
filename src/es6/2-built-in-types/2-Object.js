// MDN object.is()方法 用于判断两个值是否是相同的值。
// MDN object.assign()方法 用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。(非常重要，用的很多)
// MDN object.create()方法 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
// MDN object.keys()方法 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 。
//MDN object.entries()方法 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致 。

//ES6里面，对于原始的标准，做了哪些扩展

let name = "大漠穷秋";
let age = 18;

//需要新的user对象字面值，包含上面的变量以及它们的值

let user = {
  name,
  age,
  addr: "北京市朝阳区东四环",
};

console.log(user); // { name: '大漠穷秋', age: 18, addr: '北京市朝阳区东四环' }

// 以前的写法：
// let user = {
//     name: name,
//     age: age,
//     addr: "北京市朝阳区东四环",
// }

// function showUserInfo(...args) {
//   let result = {
//     name: "",
//     age: 0,
//     addr: "",
//   };
//   result = { ...result, ...args };
//   return result;
// }

// let temp = showUserInfo(...{ name: "大漠" });
// console.log(temp); // { name: '大漠', age: 0, addr: '' }

//ES6 super
