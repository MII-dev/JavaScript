let firstName = "Bro"
let age;
let student = true
age = 24;

console.log("Hello", firstName)
console.log("you are" , age, "years old")
age = age + 1
console.log("Enrolled:", student)
console.log(age)

document.getElementById("p1").innerHTML = "Hello " + firstName
document.getElementById("p2").innerHTML = "You are " + age + " years old"
document.getElementById("p3").innerHTML = "Enrolled: " + student


