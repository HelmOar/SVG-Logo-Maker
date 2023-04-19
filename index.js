const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
// const generateSVG = require('./generateSVG');

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
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        // return writeToFile("README.EXAMPLE.md", generateMarkdown({...answers}));
        console.log(answers);
    })
}

// Function call to initialize app
init();