//spread展开
let arr = [1, 2, 3];
//方法一
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
//方法二
// for (let i = 0; i <arr.length; i++) {
//     console.log(arr[i]);
// }

//方法三 展开运算符
// console.log(...arr);

//拷贝数组
// let arr2 = [...arr1];
// console.log(arr2); // [1, 2, 3]

//合并数组
// let arr2 = [4, 5];

// let arr3 = [...arr, ...arr2];
// console.log(arr3); // [1, 2, 3, 4, 5]

// let str1 = 'HelloWorld';
// console.log(...str1); // H e l l o W o r l d

console.log(..."HelloWorld"); // H e l l o W o r l d
