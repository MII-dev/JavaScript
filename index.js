
let tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
let result = 0
let numbers = []



for(let i = 0; i < tokens.length; i++){

    if(isNumber(tokens[i])){
        numbers.push(tokens[i])
        console.log(numbers)
    } else {
            result = calculate(tokens[i], Number(numbers[numbers.length-2]), Number(numbers[numbers.length-1]))
            console.log(result)
            numbers.pop()
            numbers.pop()
            numbers.push(result)
            console.log(numbers)
        }
    }



function calculate(operator, num1, num2){
    console.log(num1, operator, num2)
    
    switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
            if (num1 < 0 || num2 < 0) {
                return Math.trunc(num1 / num2);
            } else {
                return Math.trunc(num1 / num2)
            }
        default:
          return NaN;
    }
}

function isNumber(element){
    return !isNaN(element)
}



document.getElementById("input").innerHTML = tokens 
document.getElementById("result").innerHTML = result 
document.getElementById("count").innerHTML = result 
document.getElementById("answer").innerHTML = numbers