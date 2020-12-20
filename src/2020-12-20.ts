// 五大设计原则
// S -单一职责原则
// O -开放封闭原则
// L -李氏置换原则
// I -接口独立原则
// D - 依赖倒置原则

// S 一个程序只做一件事 ，过于复杂拆分，保持独立
// O  对扩展开放，对修改封闭
// L 子类能覆盖父类， 父类能出现的地方子类都能出现
// I 保持接口独立原则 ，避免出现胖接口
// D 面向接口编程，依赖于抽象而不依赖于具体实现

function loadImg(src) {
    return new Promise(function(resolve, reject){
        let img = document.createElement('img');
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            reject(img)
        }
        img.src = src;
    })
}

const result = loadImg('link')

result.then((img) => {
    // 第一件事
    return img
}).then((img) => {
    // 第二件事
    return img
}).then((img) => {    // 单一职责原则  开放封闭原则
    // 第三件事
    return img
}).catch(() => {
    //错误处理
})


// 从设计到模式
// 设计  模式   分开   从设计到模式

// 23种设计模式

// 创建型    
// 1 工厂模式  2单例模式   3原型模式

// 组合型 结构型

// 适配器模式   装饰器模式  代理模式    外观模式    桥接模式  组合模式  享元模式


//行为型
// 策略模式  模板方法模式  观察者模式* 迭代器模式* 职责链模式 命令模式  备忘录模式  状态模式* 访问者模式 中介模式 解释器模式



// 面试题示例

//1.打车

// class Car {
//     number: String;
//     name: String;
//     price: number
//     constructor(number ,name) {
//         this.number = number;
//         this.name = name;
//     }
// }

// class KuaiCar extends Car {
//     constructor(number, name) {
//         super(number, name)
//         this.price = 20;
//     }
// }

// class ManCar extends Car {
//     constructor(number,name) {
//         super(number, name)
//         this.price = 10
//     }
// }

// class Trip {
//     car: Car
//     constructor(car){
//         this.car = car
//     } 

//     start() {
//         console.log(this.car.number, this.car.name)
//     }

//     end() {
//         console.log(this.car.price * 5)
//     }
// }

// const car = new KuaiCar('A0000', 'BWM')
// const trip = new Trip(car);

// trip.start();
// trip.end();


// 2.停车场

class Car {
    number: String;
    name: String;
    constructor (number, name) {
        this.number = number;
        this.name = name;
    }
}


// 摄像头

class Camrea {
    constructor(){

    }
    shot(car: Car){
        return {
            num: car.number,
            inTime: Date.now()
        }
    }
}

// 显示屏
class Scree {
    show(car:Car, inTime) {
        console.log(car.number, Date.now()-inTime)
    }
}

class Park {
    floos: Array<Floor>;
    camrea: Camrea;
    scree: Scree;
    carList: any;
    constructor(floos) {
        this.floos = floos || []
    }

    in(car) {
        // 车辆信息
        const info = this.camrea.shot(car);
        // 停到某个车位
        const i = parseInt(Math.random()*100 % 100);
        const place = this.floos[0].places[i];
        place.in()
        info.place = place;
        this.carList[car.number] = info

    }

    out(car: Car) {
        // 获取信息
        const info = this.carList[car.number];

        // 将停车位清空
        const place = info.place;
        place.out();

        // 显示时间
        this.scree.show(car,info.inTime);

        //清楚记录
        delete this.carList[car.number];
    }

    emptyNum() {
        this.floos.map(floor => {
           console.log(`${floor.index}层有${floor.emptyPlaceNumber}个车位`)
        })
    }
}

// 层

class Floor {
    index: number
    places: Array<Place>
    constructor (index, places) {
        this.index = index;
        this.places = places;
    }

    emptyPlaceNumber() {
        let num = 0;
        this.places.forEach((place) => {
            if(place.isEmpty) {
                num +=1
            }
        })
        return num
    }
}

// 车位

class Place {
    isEmpty: boolean
    constructor() {
        this.isEmpty = true;
    }

    in() {
        this.isEmpty = false;
    }

    out() {

        this.isEmpty = true
    }
}
