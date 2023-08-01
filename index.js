
let numbers = [1, 2, 3, 4, 5]
let spuares = numbers.map(square)
let cubes = numbers.map(cube)

spuares.forEach(print)
cubes.forEach(print)

function square(element){
    return Math.pow(element,2)
}

function cube(element){
    return Math.pow(element,3)
}


function print(element){
    console.log(element)
}