const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { CommandStartedEvent, LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");

// array of questions for user
const questions = [
    inquirer
        .prompt([
            {
               name: 'projectTitle',
               message: 'Please enter your project title?',
               type: 'input',
            },
            {
                name: 'projectSections',
                message: 'Please list the project sections separated by commas:',
            },
            {
                name: 'description',
                message: 'Please write a description for your project:'
            },
            {
                name: 'tableOfContents',
                message: 'Please enter the items of your contents separated by commas:'
            },
            {
                name: 'installation',
                message: 'Please enter the installation instructions for your project:',
            },
            {
                name: 'usage',
                message: 'Please emter the usage information for your project',
            },
            {
                name: 'licence',
                type: 'list',
                message: 'Please choose a licence from the list: ',
                choices: [
                    'None',
                    'Apache license 2.0',
                    'GNU General Public License v3.0',
                    'MIT License',
                    'BSD 2-Clause "Simplified" License',
                    'BSD 3-Clause "New" or "Revised" License',
                    'Boost Software License 1.0',
                    'Creative Commons Zero v1.0 Universal',
                    'Eclipse Public License 2.0',
                    'GNU Affero General Public License v3.0',
                    'GNU General Public License v2.0',
                    'GNU Lesser General Public License v2.1',
                    'Mozilla Public License 2.0',
                    'The Unlicense'
                ],
            },
            {
                name: 'contributors',
                message: 'Please enter the names of contributors separated by commas: '
            },
            {
                name: 'test',
                message: 'Please enter details of project tests: ',
            },
            {
                name: 'questions',
                message: 'Please enter any questions relating to your project: '
            }
        ])
        .then(function (answer){
            console.log(answer.projectTitle);
            console.log(answer.projectSections);
            console.log(answer.description);
            console.log(answer.tableOfContents);

        })
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile('READEME.md', 
    `
    
    
    
    
    `)
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
