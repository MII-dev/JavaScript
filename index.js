
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50],
])

let shoppingCart = 0

shoppingCart += store.get("t-shirt")
shoppingCart += store.get("underwear")
console.log(shoppingCart)

console.log("")


store.set("hat", 40)
store.forEach((value, key) => console.log(`${key} - $${value}`))
console.log(store.has("hat"))
console.log(store.size)


console.log("")

store.delete("hat", 40)
store.forEach((value, key) => console.log(`${key} - $${value}`))
console.log(store.has("hat"))
console.log(store.size)

