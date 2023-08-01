
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(...numbers)

let userName = "Ihor Mal"
console.log(...userName)

let maximum = Math.max(numbers)
console.log(maximum)
maximum = Math.max(...numbers)
console.log(maximum)

let class1 = ["Spongebob", "Patrick", "Sandy"]
let class2 = ["Squidward", "Mr.Krabs", "Plankton"]

class1.push(class2)
console.log(class1)
class1 = ["Spongebob", "Patrick", "Sandy"]
class1.push(...class2)
console.log(class1)