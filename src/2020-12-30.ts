// 迭代器模式
// 顺序访问一个集合， 使用者无需知道集合的内部结构（封装）
class Iterators {
    list
    index
    constructor(container) {
        this.list = container.list;
        this.index = 0
    }

    next () {
        if(this.hasNext){
            return this.list[this.index++]
        }
        return null
    }

    hasNext() {
        if(this.index >= this.list.length) {
            return false
        }
        return true;
    }
}

class Container {
    list
    constructor(list) {
        this.list = list;
    }

    getIterator () {
        return new Iterators(this);
    }
}

let container = new Container([1,23,23,23,23234,432])
let iterator = container.getIterator()
while(iterator.hasNext) {
    console.log(iterator.next());
}



// ES6 生成一个迭代器
function each(data) {
    let Iterator = data[Symbol.iterator](); // 生成了一个迭代器
    console.log(Iterator.next())
}



// 状态模式
// 一个对象有状态变化
// 每次状态变化都会触发一个逻辑
// 不能总用if...else 来控制

// 状态
class State {
    color
    constructor(color) {
        this.color = color
    }

    handle(context) {
        context.setState(this);
    }
}


// 主题
class Context {
    state
    constructor () {
        this.state = null;
    }

    // 获取状态
    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state;
    }
}

// 状态和对象分离 主体里面可以获取状态信息
const context = new Context();

const A = new State( 'A')
const B = new State("B");

A.handle(context);

console.log(context.getState())
B.handle(context);

console.log(context.getState());







