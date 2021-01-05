// 原型模式
// 基于原型对象去创建新的对象 

const  prototype = {
    getName: function() {
        return this.first + this.last
    }
}

const x = Object.create(prototype);
x.first = "A"
x.last = "B"
alert(x.getName);

const y = Object.create(prototype);
y.first = "C"
y.last = "D"
alert(y.getName);

// prototype 可以理解为ES6 class的一种底层原理
// class 实现面向对象的基础， 并不是服务于某个模式
// 诺干年后Es6全面普及，大家可能会忽略prototype


// 桥接模式
// 用于把抽象化和实现化解耦 是的二者可以相互独立

