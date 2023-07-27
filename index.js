
let userName = "Ihor Mal"
let phoneNumber = "123-456-7890"

/*
console.log(userName.length)
console.log(userName.charAt(0))
console.log(userName.indexOf("o"))
console.log(userName.lastIndexOf("o"))
*/

//userName = userName.trim()      // "      Ihor Mal" -> "Ihor Mal"
userName = userName.toUpperCase() // Ihor Mal -> IHOR MAL
userName = userName.toLowerCase() // Ihor Mal -> ihor mal

phoneNumber = phoneNumber.replaceAll("-", "") // 123-456-7890 -> 1234567890


console.log(userName)
console.log(phoneNumber)
