//let user  = {}; //JSON 结构

// let set = new Set ([1, 2, 3, 4]);
// console.log(set);

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([4, 5, 6, 7]);

let union = new Set([...set1, ...set2]); //并集 1,2,3,4,5,6,7

let intersect = new Set([...set1].filter(x => set2.has(x))); //交集 4
//对第一个集合过滤，只保留第二个集合中有的元素

let difference = new Set([...set1].filter(x => !set2.has(x))); //补集 1,2,3;
console.log(union);
console.log(intersect);

//实际上，Set 本身就有这些方法，所以可以直接调用 已经内置了，不需要自己写
//比如： set1.union(set2)  set1.intersect(set2) set1.difference(set2)

//同样，以前，Map 也是没有这些方法的，但是现在也有了
// map里面set get (见MDN)

//WeakMap, 弱引用的Map，不会阻止垃圾回收机制回收数据，不会暴露出迭代器，没有clear方法，没有size属性，不能遍历
//WeakSet, 弱引用的Set，不会阻止垃圾回收机制回收数据，不会暴露出迭代器，没有clear方法，没有size属性，不能遍历

//ES6提供的数据结构，比较弱。真正在业务中需要处理的数据结构的事情太多了，所以我们市面上一直有一个用的比较多的库，叫做Lodash
