const inquirer = require("inquirer")

var possibleCharacters = ``
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
    return possibleCharacters
}).then((data)=> {
    console.log("posi char: ", possibleCharacters)
})