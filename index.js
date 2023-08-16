
/*const promise = new Promise((resole, reject) => {

    let fileLoaded = false

    if(fileLoaded){
        resole("File loaded")
    }else{
        reject("File NOT loaded")
    }

})

promise.then(value => console.log(value))
       .catch(error => console.log(error))
*/


const wait = time => new Promise(resolve => {

    setTimeout(resolve, time)

})

wait(3000).then( () => console.log("Thaks for waiting!") )


