// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'What credits and/or acknowledgements need to be added?',
    },
]
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
