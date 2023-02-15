const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { CommandStartedEvent, LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");
let answers = {
     title: 'title',
     sections: 'sections',
     descript: 'descr.',
     contents: 'contents',
     install: 'install',
     usage: 'usage',
     licence: 'licence',
     contrib: 'contrib',
     test: 'test',
     question: 'questi:'
}
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
            title = answer.projectTitle;
            descript = answer.descriptions;
            contents = answer.tableOfContents;
            contentsArray = contents.split(',');
            install = answer.installation;
            usage = answer.usage;
            licence = answer.licence;
            contrib = answer.contributors;
            contribArray = contrib.split(',');
            test = answer.test;
            question = answer.questions;
            writeToFile('READEME.md', answers);
        })
];

// function to loop through array

function loopThroughArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i];
        return result;
    }
}

// function to write README file
function writeToFile(fileName, data) {
    data = answers;
    fs.writeToFile('README.md', 
    `# ${title}
    ***

    ## Description
    ***
    ${descript}

    ## Table of Contents
    ***
    ${loopThroughArray(contentsArray)}

    ## Installation
    ***
    ${install}

    ## Usage
    ***
    ${usage}

    ## License
    ***
    ${licence}

    ## Contributors
    ***
    ${loopThroughArray(contrib)}

    ## Tests
    ***
    ${test}

    ## Questions 
    ***
    ${question}`)
};

// function to initialize program
function init() {
}
// function call to initialize program
init();