class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

//需要导出， 供其他模块使用
export default Animal;
