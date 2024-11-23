//MDN
//.map() 遍历数组
//.filter() 过滤数组
//.indexOf() 查找数组元素
//.includes() 是否包含某个元素
//.find() 查找数组元素
//.findIndex() 查找数组元素index

//ES6
//Array.from() 可以接受任意类数组的对象作为参数， 1.实现了iterator接口，2.必须有length属性 满足以上两个条件就可以转换为数组

//把字符串转换为数组
// let str = "HelloWorld";
// let arr = Array.from(str);
// console.log(arr); // ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd']

//要加引号，要加length
let arr2 = Array.from({
  name: "ShawnQI",
  age: 18,
  addr: "...",
  length: 1,
});

console.log(arr2); // []

//Array.of() 创建数组
