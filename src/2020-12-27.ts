// 适配器模式
class Adaptee {
    speciRequest() {
        return "特殊的"
    }
}

class Target {
    adaptee: Adaptee;
    constructor() {
        this.adaptee = new Adaptee();
    }

    request() {
        let info = this.adaptee.speciRequest();
        return info;
    }
}
const target = new Target();
console.log(target.request());

// 装饰器模式  //高阶组件
class Circle {
    draw() {
        console.log("画图");
    }
}

class Decorator {
    circle: Circle
    constructor(circle) {
        this.circle = circle
    }

    draw() {
        this.circle.draw()
        this.setColor();
    }

    setColor() {
        console.log("设置眼色");
        
    }
}

// 装饰器插件 transform-decorators-legacy

// DEMO1
function testDes (target) {   // 这是一个装饰器 用@执行
    target.isDec = true;
}
@testDes  // 装饰器装饰Demo 添加了isDec的属性
class Demo {

}
alert(Demo.isDec);

//DEMO2 // 装饰类
function mixins(...list) {   // 这是一个装饰器 合并对象
    return function (target) {
        Object.assign(target.prototype, ...list);
    }
}
const Foo = {
    foo() {
        alert("666")
    }
}

@mixins(Foo) 
class MyClass {

}
let a27 = new MyClass()
a27.foo();

// DEMO3 装饰方法

// 只读
function readOney(target,name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}

// 打印日志
function log(target, name, descriptor) {
    let old = descriptor.value;
    descriptor.value = function () {
        console.log(name, arguments);
        return old.apply(this, arguments);
    }

    return descriptor; 
}

class Person {
    first:string;
    last: string;
    constructor() {
        this.first = "a"
        this.last = "b"
    }

    @readOney //@log
    name() {
        return this.first + this.last;
    }
}

