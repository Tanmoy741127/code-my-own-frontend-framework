let buyingPrice = 200
let sellingPrice = 500

let profit;

function calculateProfit(){
    profit = sellingPrice - buyingPrice
}

calculateProfit()
console.log("Profit : "+profit)

// Update the selling price
buyingPrice = 100

calculateProfit()
console.log("Profit : "+profit)