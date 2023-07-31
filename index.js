
let prices = [5, 10, 15, 20, 25]

for(let i = 0; i < prices.length; i++){

    console.log(prices[i])

}

console.log("!!!NEW LOOP!!!")

for(let i = prices.length - 1; i >= 0; i--){

    console.log(prices[i])

}

console.log("!!!NEW LOOP!!!")

for(let price of prices){
    console.log(price)
}

