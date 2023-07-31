
let fruits = ["apple", "orange", "banana"]
console.log(fruits)

fruits[0] = "coconut"
console.log(fruits)

fruits.push("lemon")            // add an element
console.log(fruits)

fruits.pop()                    // removes last element
console.log(fruits)

fruits.unshift("mango")         // add element to beginning
console.log(fruits)

fruits.shift()                  // removes element from beginning
console.log(fruits)

let length = fruits.length
console.log(length)

let index = fruits.indexOf("orange")
console.log(index)

fruits.unshift("mango")         

    for(let fruit of fruits){
        console.log(fruit)
    }

console.log(" ")

fruits = fruits.sort()

    for(let fruit of fruits){
        console.log(fruit)
    }




