// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know to use this project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is needed for your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What instructions are needed to run tests?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What credits and/or acknowledgements need to be added?',
    },

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('generatedREADME.md', data, (err) => {
      err ? console.log('There has been an error. Please try again.') : console.log('Your README was successfully generated!')
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(data => {
        return writeToFile('generatedREADME.md', data);
    })
}

// Function call to initialize app
init();
