// function sum(...args) {
//     let result = 0;
//     for (let i of args) {
//         result += i;
//     }
//     return result;
// }

//老写法
let arr = [1, 2, 3];
let newArr = arr.map(function (item) {
  return item * item;
});
console.log(newArr); // [1, 4, 9]

//新写法
let newArr2 = arr.map(item => item * item);
console.log(newArr2); // [1, 4, 9]

//每隔1秒钟打印当前时间到页面上
//setInterval一直执行

// setInterval(function () {
//   document.body.innerHTML = new Date().toLocaleString();
// }, 1000);

// setInterval(() => {
//   document.body.innerHTML = new Date().toLocaleString();
// }, 1000);

//seTimeout只执行一次

//老写法
let user = {
  name: "damoqiongqiu",
  age: 18,
  sayHello: () => this.name,
};

let result = user.sayHello();
console.log(result); // 报错 Cannot read property 'name' of undefined
//因为 this 指向的是 window，而 window 没有 name 属性，所以返回 undefined

//箭头函数是静态作用域，而不是运行时的动态作用域
//上面，换成箭头函数, undefined  因为箭头函数没有自己的this，所以this指向的是外层的this 也就是window window.name是undefined 所以返回undefined

//注： MDN 上面可以自己搜索：Number & Math的方法

// RegExp的方法 正则表达式： 规则。 其中，最重要的方法是test()和exec()。
//test()方法是用来检测一个字符串是否匹配某个规则的，返回值是布尔值。
