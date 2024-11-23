//导入父类
import Monkey from "./Monkey";

class Human extends Monkey {
  constructor(name, age, tail) {
    super(name, age, tail);
  }
  // 重写父类方法 overwrite
  eat() {
    console.log(`Human eat everything...`);
  }
  // overwrite 人类直立行走
  run() {
    console.log(`人类直立行走`);
  }
  // 人类独有的方法
  coding() {
    console.log(`人类coding...`);
  }
}
// 需要导出， 供其他模块使用
export default Human;
