//导入父类
import Animal from "./Animal";

class Monkey extends Animal {
  // private tail; 人类没有尾巴，但es6不支持private
  constructor(name, age, tail) {
    super(name, age);
    this.tail = tail;
  }
  // 重写父类方法 overwrite
  eat() {
    console.log(`Monkey eat banana`);
  }
  // overwrite 猴子跳的方式不一样
  run() {
    console.log(`Monkey jump`);
  }
}
// 需要导出， 供其他模块使用
export default Monkey;
