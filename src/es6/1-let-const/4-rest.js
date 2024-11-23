// 求和函数

//rest 参数 语法允许我们将一个不定数量的参数表示为一个数组。
//所有的参数全部传递给args, args是一个数组
function sum(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

let result0 = sum(1, 2, 3);
let result1 = sum(1, 2, 3, 4, 5);
// console.log(result0, result1); // 6 15

//rest 操作符和结构赋值结合使用
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // [2, 3, 4, 5]
