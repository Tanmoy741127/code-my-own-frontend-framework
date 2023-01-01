// Getter and setter
const data = {
    "buyingPrice" : 200,
    "sellingPrice": 400
}


let internalvalue = data.a;

Object.defineProperty(data, "a", {
    get: function() {
        return internalvalue;
    },
    set: function(val) {
        internalvalue = val;
        console.log("Set trigerred")
    }
})

console.log(data.a)

data.a = 5677;
console.log(data.a)