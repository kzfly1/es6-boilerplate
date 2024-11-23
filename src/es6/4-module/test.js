import Monkey from "./Monkey";
import Human from "./Human";

let monkey = new Monkey("金丝猴", 10, "长尾巴");
let human = new Human("大漠穷秋", 18, "");

monkey.eat();
monkey.run();

human.eat();
human.run();

//跟之前我们在class-extends.js里面写的结果一样，只是这次我们把类分开写在不同的文件里面，然后通过import导入，这样就可以更好的管理我们的代码了。

//但是这个机制设计的不是那么完美，和nodejs里面模块化机制有细微差别，
