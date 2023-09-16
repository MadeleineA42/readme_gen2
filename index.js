// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "",
        name: "",
        message: "",
    },
    {
        type: "",
        name: "",
        message: "",
    },  {
        type: "",
        name: "",
        message: "",
    },  {
        type: "",
        name: "",
        message: "",
    },  {
        type: "",
        name: "",
        message: "",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) =>    {
        console.log('ReadMe.md generated')
        writeToFile("./assets/README.md", generateMarkdown({...responses }));
    });
}

// Function call to initialize app
init();