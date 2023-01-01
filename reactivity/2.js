class DependancyTracker{
    constructor(){
        this.subscribers = []
    }

    registerDepend(target){
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

let track = new DependancyTracker()


let buyingPrice = 200
let sellingPrice = 400

let profit;

function calculateProfit(){
    profit = sellingPrice - buyingPrice
}

// Register
track.registerDepend(calculateProfit)


calculateProfit()
console.log("Profit : "+profit)

// Update the selling price
sellingPrice = 500

track.notify();
console.log("Profit : "+profit)