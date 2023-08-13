
class Car{

    static numberOfCars = 0

    constructor(model){
        this.model = model
        Car.numberOfCars += 1
    }

    static startRace(){
        console.log("3...2...1...GO!")
    }
}

const car1 = new Car("Mustang")
const car2 = new Car("Corvette")
const car3 = new Car("BMW")
console.log(Car.numberOfCars)
const car4 = new Car("Ferrari")
const car5 = new Car("Lambo")
console.log(Car.numberOfCars)

Car.startRace()

