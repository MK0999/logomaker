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
        name: 'shapeColor',
    },
]



function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}
function init() {
    inquirer.prompt(questions)
    .then( (data) => {
        console.log(data)

        let newShape;

if(data.shape == 'Circle') {
newShape = new Circle(data.text, data.textColor, data.shape, data.shapeColor)
}

 else if (data.shape === 'Triangle') {
    newShape = new Triangle(data.text, data.textColor, data.shape, data.shapeColor)
 }
 else {
    newShape = new Square(data.text, data.textColor, data.shape, data.shapeColor)
 }
console.log(newShape)
        writeToFile("logo.svg",newShape.render())
    })
}
init()