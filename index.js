// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project",
    },
    {
        type: "input",
        name: "installation",
        message: "What did you install for this project?",
    },  {
        type: "input",
        name: "usage",
        message: "What are the uses for this application?",
    },  {
        type: "input",
        name: "credits",
        message: "Name any contributors",
    },  {
        type: "checkbox",
        name: "license",
        message: "Select which licenses were used",
        choices: ["MIT", "APACHE2.0", "none"],
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