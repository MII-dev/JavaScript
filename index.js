
const car1 = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive: function(){
        console.log("You drive a car")
    },
    brake: function(){
        console.log("You step on the brakes")
    }

}

const car2 = {
    model:"Corvett",
    color:"blue",
    year:2024,

    drive: function(){
        console.log("You drive a car")
    },
    brake: function(){
        console.log("You step on the brakes")
    }

}

console.log(car1.model)
console.log(car1.color)
console.log(car1.year)

car1.drive()
car1.brake()

console.log("")

console.log(car2.model)
console.log(car2.color)
console.log(car2.year)

car2.drive()
car2.brake()


