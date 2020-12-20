
// 创建型

// 工厂模式
class Product {
    name: string
    constructor (name) {
        this.name = name
    }

    init() {

    }
    fn1 () {

    }
}

// 这是一个工厂 替代new 操作
class Creator {
    constructor (name) {
        return new Product(name);
    }
}


// 单例模式
// 不允许被实例化 全局只有一个实例
class SingleObject {

    private constructor() {

    }
    
    login() {
        console.log('login...')
    }

    static getInstance = (() => {
        let instance;
        return function(){
            if(!instance) {
                instance = new SingleObject();
            }
            return instance;
        }
    })()
}

const obj1 = SingleObject.getInstance();
const obj2 = SingleObject.getInstance();
console.log(obj1 === obj2);

class LoginForm {
    state: string
    private constructor () {
        this.state = 'hide'
    }

    show() {

    }

    hide() {

    }

    static getInstance = (() => {
        let instance;
        return function() {
            if(!instance) {
                instance = new LoginForm();
            } 
            return instance;
        }
    })()
}
