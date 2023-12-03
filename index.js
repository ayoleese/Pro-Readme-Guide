// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What kind of license should your project have?'
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'repos',
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    },

];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
// }
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            throw error;
        }
        console.log('Your README file has been successfully created: ' + fileName);
    });
}


// TODO: Create a function to initialize app
function init() {
    // Ask questions here...
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate markdown content
            const markdownContent = generateMarkdown(answers);

            // Specify the README file name
            const fileName = 'PRO-README-GEN.md';

            // Write content to the README file
            writeToFile(fileName, markdownContent);
        })
        .catch((error) => {
            console.error('An error occurred during the initialization:', error);
        });
}

init();
