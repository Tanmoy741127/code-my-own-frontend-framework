// Getter and setter
const data = {
    "buyingPrice" : 200,
    "sellingPrice": 400
}

let target = null;


class DependancyTracker{
    constructor(){
        this.subscribers = []
    }

    registerDepend(){
        if(target && this.subscribers.includes(target) !== true){
            this.subscribers.push(target);
        }
    }

    notify(){
        for (let i = 0; i < this.subscribers.length; i++) {
            this.subscribers[i]();
        }
    }
}



Object.keys(data).forEach(key => {
    let internal = data[key];
    let dep = new DependancyTracker()

    Object.defineProperty(data, key, {
        get: function() {
            dep.registerDepend();
            return internal;
        },
        set: function(val) {
            internal = val;
            dep.notify();
        }
    })

})

// Start watching
function watch(func){
    target = func;
    target();
    target = null;
}

watch(() => {
    data.profit = data.sellingPrice - data.buyingPrice
})

console.log("Profit : "+data.profit)
data.sellingPrice = 700
console.log("Profit : "+data.profit)
data.sellingPrice = 900
console.log("Profit : "+data.profit)