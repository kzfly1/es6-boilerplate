let user = {
  _name: "张三",
  get name() {
    //可以做一些额外的动作，比如判断权限等
    return this._name;
  },
  set name(name) {
    //getter setter
    this._name = name;
  },
};

console.log(user.name); // 张三
user.name = "李四";
console.log(user.name); // 李四

//建立了一个代理对象，代理对象的get方法拦截了对目标对象的读取属性操作

//new Proxy
