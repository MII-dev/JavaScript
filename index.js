// error = object with a description of something went wrong
// throw = executes a user-defined error


try {
    let x = window.prompt("Enter a number")
    x = Number(x)

    if(isNaN(x)) throw "That wasn`t a nuber!"
    if(x == "") throw "That was empty!"


    console.log(`${x} is a number`)
}
catch(error){
    console.log(error)
}
finally{
    console.log("This always executes")
}
