// 代理模式
// 通过代理访问原本不能访问的对象
class RealImg {
    fileName: any;
    constructor(fileName) {
        this.fileName = fileName
    }

    display() {
        console.log("显示图片");
    }

    loadingImg() {
        console.log("加载图片");
    }
}

class ProxyImg {
    realImg: RealImg;
    constructor(fileName) {
        this.realImg = new RealImg("fileName"); 
    }

    display() {
        this.realImg.display();
    }
}

// ES6 Proxy
// 明星
let star = {
    name:"刘德华",
    age:"55",
    phone:"1333333333"

}
// 经纪人 代理
let agent = new Proxy(star, {
    get: function(target ,key) {
        if(key === "phone") {
            return "1355555555"
        }
        if(key === "price") {
            return 20000
        }
        return target[key];
    },

    set: function(target,key,val) {
        if(key === "coutomsPrices") {
            if(val< 100000) {
                console.log("价格太低")
            } else {
                target[key] = val;
                return true
            }
        }

    }
})


// 适配器模式： 提供一个不同的接口
// 代理模式： 提供一个一模一样的接口，假装访问的原接口， 显示原有功能，但是会经过限制的
// 装饰器模式： 扩展功能。原有功能不变可直接使用


// 外观模式
// 提供一个高层接口，来访问子业务接口
