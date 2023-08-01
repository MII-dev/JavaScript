
sum(2,3, displayConsole, displayDOM)

function sum(x, y, ...callbacks){
    let result = x + y
    for(let callback of callbacks){
        callback(result)
    }
    
}

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("myLabel").innerHTML = output
}
