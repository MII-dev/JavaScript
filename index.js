


const greeting = function(userName){
    console.log(`Hello ${userName}`)
}

greeting("Ihor")

const arrowGreeting = (userName) => console.log(`Hello ${userName}`)

arrowGreeting("Ihor (arrow func)")





const percent = function(x, y){
    return x / y * 100
}

console.log(`${percent(75, 100)}%`)

const percentArrow = (x, y) =>  x / y * 100

console.log(`${percentArrow(75, 100)}% (arrow func)`)






let grades = [100, 50, 90, 60, 80, 70]

grades.sort( (x, y) => y - x)
grades.forEach((element) => console.log(element))




