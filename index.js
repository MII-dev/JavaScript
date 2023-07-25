//let usename = window.prompt("What`s youe name?")
//console.log(usename)

let username

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value
    console.log(username)
    document.getElementById("myLabel").innerHTML = "Hello " + username
}