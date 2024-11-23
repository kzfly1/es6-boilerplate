//迭代器
let arr = [1, 2, 3, 4, 5];

for (let value of arr) {
  console.log(value);
}

//Array, Set, map, String
let set = new Set([4, 5, 6]);
for (let item of set) {
  console.log(item);
}

let str = "HelloWorld";
for (let item of str) {
  console.log(item);
}

//spread, rest, ... 本质就是实现了Iterator接口的类型
