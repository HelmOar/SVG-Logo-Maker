// Inquirer (node package manager) import
const inquirer = require('inquirer');
const path = require('path');
// File system module (node package manager) import
const fs = require('fs');
const svggenerator = require('./lib/svggenerator');

// Importing classes from ./lib/shapes directory
const { Triangle, Square, Circle } = require("./lib/shapes");



const questions = [
{
    type: "input",
    name: "text",
    message: "Enter the text for the logo. Must not be more than 3 characters."
},

{
    type: "input",
    name: "color",
    message: "Enter a text color"
},

{
    type: "list",
    name: "shape",
    message: "Select a shape for the logo",
    choices: ["circle", "square", "triangle"]
},

{
    type: "input",
    name: "shape_color",
    message: "Enter a shape color"
}, 

]

let shape;

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
     switch (answers.shape) {
         case "circle": 
            shape = new Circle();
         break;
            case "square":
                shape = new Square();
            break;
            case "triangle":
                shape = new Triangle();
            break;
     }   
    })
     //create new svg object with text and shape
const svg = new svggenerator.SVG();
svg.setText(answers.text, answers.color);
svg.setShape(shape);
shape.setColor(answers.shape_color);
const svgString = svg.render();
  

//function to write data to file
function writeToFile(fileName, data) {
    filesystem.writeFile (filename, data, (err) => {
        if (err)
        return console.log(err);
        
        // console.log(answers);

    });
    }

    writeToFile (svggenerator.SVG, svgString);

}

// Function call to initialize app
init();