const {Circle,Triangle,Square } = require("./lib/shape")
const fs = require("fs")
const inquirer = require("inquirer")

const questions = [
    {
        type : 'input',
        message: 'Enter three characters for logo',
        name: 'text',
    },
    {
        type : 'input',
        message: 'Enter a color for text',
        name: 'textColor',
    },
    {
        type : 'list',
        message: 'Select a shape for logo',
        name: 'shape',
        choices: ['Circle','Triangle','Square']
    },
    {
        type : 'input',
        message: 'Enter color for shape',
        name: 'shaorColor',
    },
]

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, shape(data))
}
function init() {
    inquirer.prompt(questions)
    .then( (data) => {
        console.log(data)
        writeToFile("svg.logo",data)
    })
}
init()