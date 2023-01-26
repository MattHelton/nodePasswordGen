const inquirer = require("inquirer")

var possibleCharacters = ``
var lowerCase = `abcdefghijklmnopqrstuvwxyz`
var upperCase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
var specialChars = `!@#$%^&*()_+=-?/><{}[]`

inquirer.prompt([
    {
        message: 'How long should the password be?',
        name: `passwordLength`,
        type: `input`
    },
    {
        message: `Would you like numbers in your password?`,
        name: `hasNumbers`,
        type: `input`
    },
    {
        message: `Would you like capital letters in your password?`,
        name: `hasCaps`,
        type: `input`
    },
    {
        message: `Would you like special characters in your password?`,
        name: `hasSpecials`,
        type: `input`
    }

]).then((answers) => {
    var passwordLength = answers.passwordLength
})