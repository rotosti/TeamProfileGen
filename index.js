const inquirer = require('inquirer');
const fs = require('fs');
const htmlGenerator = require('./src/generateHTML')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const managerList = [];
const engineerList = [];
const internList = [];

const employeeGenerateQuestions = [{
    name: 'position',
    type: 'list',
    message: `What is the new employee's position?`,
    choices: ['Manager', 'Engineer', 'Intern']
}, {
    name: 'employeeName',
    type: 'input',
    message: `What is the new employee's name?`,
}, {
    name: 'employeeID',
    type: 'input',
    message: `What is the new employee's ID number?`
}, {
    name: 'employeeEmail',
    type: 'input',
    message: `What is the new employee's email?`
}, {
    name: 'officeNumber',
    type: 'input',
    message: `What is the new employee's office number?`,
    when: answers => answers.position === 'Manager'
}, {
    name: 'github',
    type: 'input',
    message: `What is the new employee's GitHub username?`,
    when: answers => answers.position === 'Engineer'
}, {
    name: 'school',
    type: 'input',
    message: `What school is the new employee attending?`,
    when: answers => answers.position === 'Intern'
}]

const continueOrQuitQuestion = {
    name: 'enterOrQuit',
    type: 'list',
    message: `What would you like to do?`,
    choices: ['Create a new employee.', 'Exit this application.'],
}



function init() {
    inquirer
        .prompt(continueOrQuitQuestion)
        .then((data) => {
            if (data.enterOrQuit === 'Create a new employee.') {
                createNewEmployee();
            } else {
                terminate();
            }
        })
}

function terminate() {

    let htmlData = htmlGenerator.generateHTML(managerList,engineerList,internList);

    fs.writeFile('./dist/index.html', htmlData, (err) => {
        err ? console.error(err) : console.log('Successfully created HTML file.')
    })

    console.log('Terminated application.')
}

function createNewEmployee() {
    inquirer
        .prompt(employeeGenerateQuestions)
        .then((data) => {
            switch (data.position) {
                case 'Manager':
                    managerList.push(new Manager(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.officeNumber));
                    break;
                case 'Engineer':
                    engineerList.push(new Engineer(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.github));
                    break;
                case 'Intern':
                    internList.push(new Intern(
                        data.employeeName,
                        data.employeeID,
                        data.employeeEmail,
                        data.school));
                    break;
            }
            init();
        })
}

init();