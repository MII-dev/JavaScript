
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
    
    let fileLoaded = true
    
    if(fileLoaded){
        return "File loaded"
    }else{
        throw "File NOT loaded"
    }
}
    
loadFile().then(value => console.log(value))
          .catch(error => console.log(error))


