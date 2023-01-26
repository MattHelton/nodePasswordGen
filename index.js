const { getPackedSettings } = require("http2")
const inquirer = require("inquirer")

var possibleCharacters = ``
var finalPassword = ``
var lowerCase = `abcdefghijklmnopqrstuvwxyz`
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var specialChars = `!@#$%^&*()_+=-?/><{}[]`
var numbers = "1234567890"

inquirer.prompt([
    {
        message: 'How long should the password be?',
        name: `passwordLength`,
        type: `input`
    },
    {
        message: `Would you like numbers in your password?`,
        name: `hasNumbers`,
        type: `confirm`
    },
    {
        message: `Would you like capital letters in your password?`,
        name: `hasCaps`,
        type: `confirm`
    },
    {
        message: `Would you like special characters in your password?`,
        name: `hasSpecials`,
        type: `confirm`
    }

]).then((answers) => {
    var passwordLength = answers.passwordLength
    possibleCharacters += lowerCase
    if(answers.hasNumbers){
        possibleCharacters += numbers
    }
    if(answers.hasCaps){
        possibleCharacters += upperCase
    }
    if(answers.hasSpecials){
        possibleCharacters += specialChars
    }

    for(let i =0; i < passwordLength; i++){
        let ranNum = Math.floor(Math.random() * (possibleCharacters.length + 1))
        let ranChar = possibleCharacters.charAt(ranNum)
        finalPassword += ranChar
    }
    return finalPassword
}).then((data)=> {
    console.log("password: ", data)
})