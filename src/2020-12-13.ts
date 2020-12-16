// 封装
// 减少耦合， 不该外露的不外露
// 利于数据，接口权限管理
// Es6目前不支持， _ 下划线开头的默认是私有属性

class Car {
    name
    age  // 默认是公开的
    protected weight  // 本身和子类才能访问 外部访问不到
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.weight = 20
    }

    eat() {
        alert(`${this.name} eat food`)
    }

    speak() {
        alert(`My name is ${this.name} and ${this.age}`)
    }
}

class Car1 extends Car {
    private color 
    constructor (name, age) {
        super(name, age);
        this.color = 'black'; // 只能自身里面访问
    }
    run() {
        alert(`一只 ${this.weight} 斤 ${this.color} car run `); // weight本身和子类里面才能访问得到
    }
}

// 多态
// 同一个方法，继承父类，减少代码冗余，在子类里面可以有不同的实现,保持子类的开放性和灵活性
// renderValue
class BaseField {
    name: string;
    constructor(name) {
        this.name = name;
    }

    renderValue(value) {
        return value;
    }
}

class MoneyField extends BaseField {
    constructor (name) {
        super(name);
    }
    renderValue(value) {
        return Number(value); 
    }
}

class TextField extends BaseField {
    constructor(name) {
        super(name)
    }
    renderValue(value) {  
        return value;
    }
}

