// 观察者模式;
// 发布订阅  一对多;

// 观察者   被观察者     observer  observerble

// 主体
class Subject {
    state: number;
    observers: Array<Observer>;
    constructor () {
        this.state = 0;
        this.observers = [];
    }

    getState() {
        return this.state;
    }

    setState(state) {
        this.state = state

    }

    notifyAllObservers() {
        this.observers.forEach(observer => {
            observer.update();
        })
    }
    attachment(observer) {
        this.observers.push(observer)
    }
}

// 观察者
class Observer{
    na: string;
    subject: Subject;
    constructor(name, subject) {
        this.na= name
        this.subject = subject
        this.subject.attachment(this);
    }

    update() {
        console.log(this.na + this.subject.getState())
    }
}


// 一个主体可以添加多个观察者;
// 主体和观察者分离，不主动触发，被动监听，解耦