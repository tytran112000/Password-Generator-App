const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordEl = document.getElementById("password-el")
let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let passwordLength = 15

// get random character
function getRandomCharacter(){
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

// loop through randomPassword 15 times while putting random character in it and return value to passwordGenerate()
function passwordGenerate(){
    let randomPassword = ""
    for ( let i = 0; i < passwordLength; i++){
        randomPassword += getRandomCharacter()
    }
    
    return randomPassword
}
 
function passwordNew(){
    passwordOneEl.innerText = passwordGenerate()
    passwordTwoEl.innerText = passwordGenerate()
}
// print out the password to the screen
function getPassword(){
    passwordNew()
}
