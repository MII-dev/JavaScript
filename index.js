
/*const promise = new Promise((resole, reject) => {

    let fileLoaded = false

    if(fileLoaded){
        resole("File loaded")
    }else{
        reject("File NOT loaded")                           // THE SAME
    }

})

promise.then(value => console.log(value))
       .catch(error => console.log(error))*/


async function loadFile(){

    let fileLoaded = false
    
    if(fileLoaded){
        return "File loaded"
    }else{
        throw "File NOT loaded"
    }
}


async function startProcess(){

    try{
        let message = await loadFile()
        console.log(message)
    }
    catch(error){
        console.log(error)
    }
    
}

startProcess()




