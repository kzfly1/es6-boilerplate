let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(), 1000;
  });
});
promise.then(
  () => {
    console.log(value);
  },
  err => {
    console.log(err);
  }
);

//Promise 承诺， resolve：兑现； reject：拒绝;
//有什么好处？
//1.链式调用，解决回调地狱问题 then链式调用
//2.可以在异步操作完成后，继续进行其他操作
//3.可以获取异步操作的结果
//4.可以捕获异常
//5.可以实现多个异步操作并行执行，最终得到所有异步操作的结果
