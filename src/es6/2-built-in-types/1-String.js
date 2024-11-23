//MDN 文档 搜String
//MDN 文档 搜String.prototype

// String.prototype.substring()
//返回一个字符串，该字符串是string的一个子串，从start开始，到stop结束。

// String.prototype.split()
//split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

//String.prototype.padEnd()
//padEnd() 方法用另一个字符串填充当前字符串，以便产生的字符串达到给定的长度。填充从当前字符串的末尾（右侧）开始。

//String.prototype.includes()
//includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回true或false。

//concat() 方法用于连接两个或多个字符串。
//endWith() 方法用于判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
//startsWith() 方法用于判断字符串是否以指定字符串开头。

//课后在MDN过一下常用的String方法

// ES6 引入的： 模板字符串
// 用反引号 ` ` 括起来，变量用${}包裹

let user = {
  name: "damoqiongqiu",
  age: 18,
  addr: "北京市朝阳区东四环",
  sayHello: function () {
    return this.name;
  },
};

//以前的写法 换行要用\n
// let str2 = '姓名：' + user.name + ' 年龄：' + user.age + ' 地址：' + user.addr;
// console.log(str2);

//现在的写法 模版字符串 不需要\n，直接换行，如下：

// 实际工作中，加入div标签，可以直接在页面上显示出来， 在封装组件时，也会用到
let str3 = `
    <div> 姓名：${user.name}, </div>
    <div> 年龄：${user.age}, </div>
    <div> 地址：${user.addr}, </div>
    <div> 打招呼：${user.sayHello()} </div>
`;

console.log(str3);

// document.body.innerHTML = str3; //在页面上显示出来

//有一个用户列表，所有用户信息用无序列表展示出来
let userList = [
  {
    name: "damoqiongqiu",
    age: 18,
    addr: "北京市朝阳区东四环",
  },
  {
    name: "damoqiongqiu",
    age: 18,
    addr: "北京市朝阳区东四环",
  },
  {
    name: "damoqiongqiu",
    age: 18,
    addr: "北京市朝阳区东四环",
  },
  {
    name: "damoqiongqiu",
    age: 18,
    addr: "北京市朝阳区东四环",
  },
];

//模版字符串可以加入方法，可以用$执行方法，可以嵌套； 用react组件，可以显示更好看的页面
let tempHTML = `
    <ul>
        ${userList
          .map((item, i) => {
            return `<li> 用户名: ${item.name}, 年龄: ${item.age}, 收货地址: ${item.addr}</li>`;
          })
          .join("")}
    
    </ul>
`;

document.body.innerHTML = tempHTML;
