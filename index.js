 let myNum = 123456.789

 myNum = myNum.toLocaleString("en-US")      //  US English

 console.log(myNum)

 myNum = 123456.789

 myNum = myNum.toLocaleString("hi-IN")      //  Hindi

 console.log(myNum)

 myNum = 123456.789

 myNum = myNum.toLocaleString("de-DE")      //  standart German

 console.log(myNum)

 myNum = 123456.789

 myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})      //  US English

 console.log(myNum)

 myNum = 123456.789

 myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})      //  US English

 console.log(myNum)

 myNum = 123456.789

 myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})      

 console.log(myNum)

 myNum = .5

 myNum = myNum.toLocaleString(undefined, {style: "percent"})

 console.log(myNum)

 myNum = 100

 myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})

 console.log(myNum)

