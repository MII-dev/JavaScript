
document.getElementById("myButton").onclick = function(){

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const masterBtn = document.getElementById("masterBtn")
    const paypalBtn = document.getElementById("paypalBtn")


    if(myCheckBox.checked){
        console.log("Yoy are subscribed!")
    }else{
        console.log("Yoy are NOT subscribed!")
    }

    if(visaBtn.checked){

        console.log("You are paying with a Visa")

    }else if(masterBtn.checked){

        console.log("You are paying with a MasterCard")

    }else if(paypalBtn.checked){

        console.log("You are paying with a PayPal")

    }else{

        console.log("tou must select a payment type!")
        
    }

}